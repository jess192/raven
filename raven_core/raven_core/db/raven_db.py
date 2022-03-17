import os
import time
import sqlite3
from sqlite3 import Connection, Cursor
from raven_core.logging.exceptions import UniqueProductException, DoesNotExistException, BotException
from raven_core.logging.logger import logger
from raven_scraper.providers.amazon_provider import AmazonProvider


class RavenDb:
    def __init__(self):
        self._db_name = self._get_path('raven.db')
        self._schema_sql = self._get_path('sql/schema.sql')

    @staticmethod
    def _get_path(path: str) -> str:
        return f'{os.path.dirname(__file__)}/{path}'

    def _create_connection(self) -> Connection:
        try:
            return sqlite3.connect(self._db_name)
        except Exception:
            raise

    def db_init(self) -> None:
        logger.info('Initializing DB')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                with open(self._schema_sql) as f:
                    curr.executescript(f.read())

                conn.commit()
            except Exception:
                raise
            else:
                logger.success('Database has been initialized')

    def get_product_list(self) -> list:
        logger.info('Getting list of products')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            statement: str = '''SELECT ID, SOURCE FROM ITEMS'''
            curr.execute(statement)
            return curr.fetchall()

    def scrape_for_product_prices(self) -> None:
        logger.info('Scraping for product prices')

        products: list = self.get_product_list()

        for product in products:
            product_id: str = product[0]
            source: str = product[1]

            if source == 'amazon':
                try:
                    price_info = AmazonProvider().get_product_prices(product_id)
                except DoesNotExistException as e:
                    logger.error(e)
                except BotException as e:
                    logger.error(e)
                except Exception as e:
                    logger.error(e)
                finally:
                    self.insert_price(price_info)
            else:
                logger.error(f'Source does not exist: {source}')

            time.sleep(5)

    def insert_price(self, price_info: dict) -> None:
        logger.info(f'Inserting price: {price_info}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()
            statement: str = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
            curr.execute(statement, (price_info['id'], price_info['timestamp'], price_info['price']))

    def insert_product(self, url: str) -> None:
        logger.info(f'Inserting product: {url}')
        try:
            product: dict = AmazonProvider().get_product_info(url)
        except Exception:
            raise

        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                statement_items: str = '''INSERT INTO ITEMS (ID, TIMESTAMP , SOURCE, TITLE, IMAGE_URL) 
                    VALUES (?, ?, ?, ?, ?)
                    '''
                curr.execute(
                    statement_items,
                    (product['id'], product['timestamp'], product['source'], product['title'], product['image_url'])
                )

                statement_prices: str = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
                curr.execute(
                    statement_prices,
                    (product['id'], product['timestamp'], product['price'])
                )
            except sqlite3.IntegrityError as e:
                raise UniqueProductException(url)

    def select_products_prices(self) -> list[dict]:
        conn: Connection = self._create_connection()
        conn.row_factory = sqlite3.Row

        with conn:
            curr: Cursor = conn.cursor()

            statement_items: str = '''SELECT ID, TITLE, IMAGE_URL FROM ITEMS'''
            curr.execute(statement_items)

            rows: list = curr.fetchall()
            product_prices: list[dict] = []

            for row in rows:
                row_id: str = row['ID']
                statement_prices: str = """SELECT TIMESTAMP, PRICE FROM PRICES WHERE ID = ?"""
                curr.execute(statement_prices, [row_id])

                product_prices.append({
                    'ID': row['ID'],
                    'TITLE': row['TITLE'],
                    'IMAGE_URL': row['IMAGE_URL'],
                    'PRICES': curr.fetchall()
                })

            return product_prices

    def delete_product(self, product_id: str) -> None:
        logger.info(f'Deleting product: {product_id}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            statement_prices: str = """DELETE FROM PRICES WHERE ID = ?"""
            curr.execute(statement_prices, [product_id])

            statement_items: str = """DELETE FROM ITEMS WHERE ID = ?"""
            curr.execute(statement_items, [product_id])


if __name__ == '__main__':
    RavenDb().db_init()

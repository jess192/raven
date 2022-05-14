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

            statement: str = '''SELECT ID, URL, SOURCE FROM ITEMS'''
            curr.execute(statement)
            return curr.fetchall()

    def scrape_for_product_prices(self) -> None:
        logger.info('Scraping for product prices')

        products: list = self.get_product_list()

        for product in products:
            product_id: str = product[0]
            url: str = product[1]
            source: str = product[2]

            logger.info(f'Getting price for: {product_id} @ {source}')

            if source == 'amazon':
                try:
                    price_info = AmazonProvider().get_product_prices(product_id, url)
                except DoesNotExistException as e:
                    logger.error(e)
                except BotException as e:
                    logger.error(e)
                except Exception as e:
                    logger.error(e)
                else:
                    self.insert_price(price_info)
            else:
                logger.error(f'Source does not exist: {source}')

            time.sleep(5)

    def insert_price(self, price_info: dict) -> None:
        id: str = price_info['id']
        timestamp: str = price_info['timestamp']
        price: str = price_info['price']

        logger.info(f'Inserting price: {id} -> {price}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()
            statement: str = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
            curr.execute(statement, (id, timestamp, price))

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
                statement_items: str = '''INSERT INTO ITEMS (ID, TIMESTAMP, URL, SOURCE, TITLE, IMAGE_URL) 
                    VALUES (?, ?, ?, ?, ?, ?)
                '''
                curr.execute(
                    statement_items,
                    (product['id'], product['timestamp'], product['url'],
                     product['source'], product['title'], product['image_url'])
                )

                statement_prices: str = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
                curr.execute(
                    statement_prices,
                    (product['id'], product['timestamp'], product['price'])
                )
            except sqlite3.IntegrityError as e:
                raise UniqueProductException(url)

    def select_products_prices(self) -> dict:
        conn: Connection = self._create_connection()
        conn.row_factory = sqlite3.Row

        with conn:
            curr: Cursor = conn.cursor()

            statement_items: str = '''SELECT ID, SOURCE, URL, TITLE, IMAGE_URL FROM ITEMS ORDER BY TIMESTAMP DESC'''
            curr.execute(statement_items)

            rows: list = curr.fetchall()
            product_prices: list[dict] = []

            for row in rows:
                row_id: str = row['ID']

                statement_current_prices: str = '''SELECT TIMESTAMP, PRICE FROM PRICES 
                    WHERE ID = ? ORDER BY TIMESTAMP DESC LIMIT 1'''
                curr.execute(statement_current_prices, [row_id])
                current_prices: dict = curr.fetchone()

                statement_first_prices: str = '''SELECT TIMESTAMP, PRICE FROM PRICES 
                    WHERE ID = ? ORDER BY TIMESTAMP ASC LIMIT 1'''
                curr.execute(statement_first_prices, [row_id])
                first_prices: dict = curr.fetchone()

                percent_change: int = 0 if not current_prices['PRICE'] or not first_prices['PRICE'] else round(
                    (current_prices['PRICE'] - first_prices['PRICE']) / first_prices['PRICE'] * 100, 2)

                product_prices.append({
                    'id': row_id,
                    'title': row['TITLE'],
                    'imageURL': row['IMAGE_URL'],
                    'provider': row['SOURCE'],
                    'providerURL': row['URL'],
                    'currentPrice': {
                        'price': current_prices['PRICE'],
                        'timestamp': current_prices['TIMESTAMP'],
                    },
                    'firstPrice': {
                        'price': first_prices['PRICE'],
                        'timestamp': first_prices['TIMESTAMP'],
                    },
                    'percentChange': percent_change
                })

            current_prices_filtered: list = [product['currentPrice']['price'] for product in product_prices if
                                             product['currentPrice']['price'] is not None]

            return {
                'products': product_prices,
                'minPrice': min(current_prices_filtered) if current_prices_filtered else 0,
                'maxPrice': max(current_prices_filtered) if current_prices_filtered else 0
            }

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

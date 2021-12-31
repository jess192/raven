import os
import time
import sqlite3
from sqlite3 import Connection, Cursor
from raven_core.logging.logger import logger
from raven_core.providers.amazon_provider import AmazonProvider


class RavenDb:
    def __init__(self):
        self._db_name = self._get_path('raven.db')
        self._schema_sql = self._get_path('sql/schema.sql')
        self._amazon_provider = AmazonProvider()

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

            statement = '''SELECT ID, SOURCE FROM ITEMS'''
            curr.execute(statement)
            return curr.fetchall()

    def scrape_for_product_prices(self) -> None:
        logger.info('Scraping for product prices')

        products: list = self.get_product_list()

        for product in products:
            product_id: str = product[0]
            source: str = product[1]

            if source == 'amazon':
                price_info = self._amazon_provider.get_product_prices(product_id)
            else:
                raise Exception('Source does not exist')

            self.insert_price(price_info)
            time.sleep(5)


    def insert_price(self, price_info: dict) -> None:
        logger.info(f'Inserting price: {price_info}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()
            statement = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
            curr.execute(statement, (price_info['id'], price_info['timestamp'], price_info['price']))

    def insert_product(self, url: str) -> None:
        logger.info(f'Inserting product: {url}')
        try:
            product = AmazonProvider().get_product_info(url)
        except Exception as e:
            raise

        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            statement0 = '''INSERT INTO ITEMS (ID, TIMESTAMP , SOURCE, TITLE, IMAGE_URL) 
                VALUES (?, ?, ?, ?, ?)
                '''
            curr.execute(
                statement0,
                (product['id'], product['timestamp'], product['source'], product['title'], product['image_url'])
            )

            statement = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
            curr.execute(
                statement,
                (product['id'], product['timestamp'], product['price']))


    def select_products_prices(self) -> dict:
        conn: Connection = self._create_connection()
        conn.row_factory = sqlite3.Row

        with conn:
            curr: Cursor = conn.cursor()

            statement = '''SELECT ID, TITLE, IMAGE_URL FROM ITEMS'''
            curr.execute(statement)

            rows = curr.fetchall()

            new_obj = []

            for row in rows:
                row_id: str = row['ID']
                statement_2 = """SELECT TIMESTAMP, PRICE FROM PRICES WHERE ID = ?"""
                curr.execute(statement_2, [row_id])
                rows_2 = curr.fetchall()

                new_obj.append({
                    'ID': row['ID'],
                    'TITLE': row['TITLE'],
                    'IMAGE_URL': row['IMAGE_URL'],
                    'PRICES': rows_2
                })

            return new_obj


if __name__ == '__main__':
    RavenDb().db_init()

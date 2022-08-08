import os
import sqlite3
from sqlite3 import Connection, Cursor
from raven_core.logging.exceptions import UniqueProductException, NotBeingTrackedException
from raven_core.logging.logger import logger
from raven_core.utils import get_env
from raven_scraper.providers.amazon_provider import AmazonProvider


class RavenDb:
    def __init__(self):
        self._db_name = get_env('RAVEN_DB_LOCATION')
        self._schema_sql = self._get_path('sql/schema.sql')

    @staticmethod
    def _get_path(path: str) -> str:
        return f'{os.path.dirname(__file__)}/{path}'

    def _db_init(self, conn) -> None:
        logger.info('Initializing DB')

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

    def _check_db_exists(self, conn: Connection) -> None:
        with conn:
            curr: Cursor = conn.cursor()

            statement: str = '''SELECT name FROM sqlite_master'''
            curr.execute(statement)

            if not curr.fetchall():
                self._db_init(conn)

    def _create_connection(self) -> Connection:
        try:
            conn: Connection = sqlite3.connect(self._db_name)
            self._check_db_exists(conn)
            return conn
        except Exception:
            raise

    def get_product_id_list(self) -> list:
        logger.info('Getting list of product IDs')
        conn: Connection = self._create_connection()
        conn.row_factory = lambda cursor, row: row[0]

        with conn:
            curr: Cursor = conn.cursor()

            statement: str = '''SELECT ID FROM ITEMS'''
            curr.execute(statement)
            return curr.fetchall()

    def get_product_url(self, product_id):
        logger.info(f'Getting product info for {product_id}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            statement: str = '''SELECT SOURCE, URL FROM ITEMS WHERE ID = ?'''
            curr.execute(statement, [product_id])
            return curr.fetchall()

    def scrape_for_product_price(self, product_id) -> float:
        logger.info(f'Scraping for product price for {product_id}')
        product_info = self.get_product_url(product_id)

        if not product_info:
            raise NotBeingTrackedException(product_id)

        if product_info:
            source: str = product_info[0][0]
            url: str = product_info[0][1]

            if source == 'amazon':
                logger.info(f'Getting price for: {product_id} @ {source}')

                try:
                    price_info = AmazonProvider().get_product_prices(product_id, url)
                except Exception:
                    raise
                else:
                    self.insert_price(price_info)
                    return price_info['price']
            else:
                logger.error(f'Source does not exist: {source}')

    def insert_price(self, price_info: dict) -> None:
        product_id: str = price_info['id']
        timestamp: str = price_info['timestamp']
        price: str = price_info['price']

        logger.info(f'Inserting price: {product_id} -> {price}')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()
            statement: str = '''INSERT INTO PRICES (ID, TIMESTAMP, price) VALUES (?, ?, ?)'''
            curr.execute(statement, (product_id, timestamp, price))

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
            except sqlite3.IntegrityError:
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

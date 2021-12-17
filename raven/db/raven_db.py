import sqlite3
from sqlite3 import Connection, Cursor
import os


class RavenDb:
    def __init__(self):
        self.db_name = self._abspath('raven/db/raven.db')
        self.schema_sql = self._abspath('raven/db/sql/schema.sql')
        self.select_items_sql = self._abspath('raven/db/sql/select_items.sql')
        self.insert_items_sql = self._abspath('raven/db/sql/insert_items.sql')
        self.insert_prices_sql = self._abspath('raven/db/sql/insert_prices.sql')

    @staticmethod
    def _abspath(path: str) -> str:
        return os.path.abspath(path)

    def _create_connection(self) -> Connection:
        try:
            return sqlite3.connect(self.db_name)
        except Exception:
            raise

    def db_init(self) -> None:
        print('Initializing DB..')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                with open(self.schema_sql) as f:
                    curr.executescript(f.read())

                conn.commit()
                print('Database has been initialized.')
            except Exception:
                raise

    def select_items(self) -> list:
        print('Selecting items..')
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                with open(self.select_items_sql, 'r') as file:
                    curr.execute(file.read())

                return curr.fetchall()
            except Exception:
                raise

    def insert_item(self, item):
        print('Inserting item: ', item)
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                with open(self.insert_items_sql, 'r') as file:
                    curr.execute(
                        file.read(),
                        (item['id'], item['timestamp'], item['source'], item['title'], item['image_url'])
                    )

                with open(self.insert_prices_sql, 'r') as file:
                    curr.execute(
                        file.read(),
                        (item['id'], item['timestamp'], item['price'])
                    )
            except Exception:
                raise

    def insert_price(self, price_info: dict):
        print('Inserting price: ', price_info)
        conn: Connection = self._create_connection()

        with conn:
            curr: Cursor = conn.cursor()

            try:
                with open(self.insert_prices_sql, 'r') as file:
                    curr.execute(
                        file.read(),
                        (price_info['id'], price_info['timestamp'], price_info['price'])
                    )
            except Exception:
                raise


if __name__ == '__main__':
    RavenDb().db_init()

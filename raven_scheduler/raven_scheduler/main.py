import time
from utils.amazon_provider import AmazonProvider
from db.raven_db import RavenDb
from utils.exceptions import BotException
import schedule
from loguru import logger


class Raven:
    def __init__(self):
        self._amazon_provider = AmazonProvider()
        self._raven_db = RavenDb()

    def scrape_for_new_prices(self):
        logger.info('Running Raven')
        try:
            items: list = self._raven_db.select_items()

            for item in items:
                id_: str = item[0]
                source: str = item[1]

                if source == 'amazon':
                    price_info = self._amazon_provider.get_item_prices(id_)
                else:
                    raise Exception('Source does not exist')

                self._raven_db.insert_price(price_info)
                time.sleep(5)

        except BotException as e:
            logger.error(e)
        except Exception as e:
            logger.error(e)
        except KeyboardInterrupt:
            logger.info('KeyboardInterrupt: Cancelled Raven')
        finally:
            logger.info('Raven script ended')


def run_raven():
    Raven().scrape_for_new_prices()
    logger.info(schedule.jobs)


if __name__ == '__main__':
    logger.info('Raven begin')

    schedule.every().hour.at(':00').do(run_raven)
    logger.info(schedule.jobs)

    try:
        while True:
            schedule.run_pending()
            time.sleep(30)
    except KeyboardInterrupt:
        logger.info('KeyboardInterrupt: Leaving scheduler.')

from raven_core.logging.logger import configure_logging, logger
from raven_core.db.raven_db import RavenDb
from raven_core.logging.exceptions import BotException
import schedule
import time


class RavenScraper:
    def __init__(self):
        self._raven_db = RavenDb()
        configure_logging()

    def run_job(self) -> None:
        try:
            self._raven_db.scrape_for_product_prices()
        except KeyboardInterrupt:
            logger.warning('KeyboardInterrupt: Stopped scraping for product prices')
        except Exception as e:
            logger.error(e)
        else:
            logger.info('Scraping for product prices finished')
            logger.info(schedule.jobs)

    def run_scraper(self) -> None:
        logger.info('Running Raven Scraper')
        self.run_job()
        schedule.every(3).hours.at(':00').do(self.run_job)
        logger.info(schedule.jobs)

        try:
            while True:
                schedule.run_pending()
                time.sleep(30)
        except KeyboardInterrupt:
            logger.warning('KeyboardInterrupt: Stopped scraper')
        except Exception as e:
            logger.error(e)

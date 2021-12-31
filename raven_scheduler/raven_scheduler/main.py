from raven_core.logging.logger import configure_logging, logger
from raven_core.db.raven_db import RavenDb
from raven_core.logging.exceptions import BotException
import schedule
import time


class RavenScheduler:
    def __init__(self):
        self._raven_db = RavenDb()
        configure_logging()

    def run_job(self) -> None:
        try:
            self._raven_db.scrape_for_product_prices()
        except BotException as e:
            logger.error(e)
        except KeyboardInterrupt:
            logger.warning('KeyboardInterrupt: Stopped scraping for product prices')
        except Exception as e:
            logger.error(e)
        else:
            logger.success('Scraping for product prices finished')
            logger.info(schedule.jobs)

    def run_scheduler(self) -> None:
        logger.info('Running Raven Scheduler')
        schedule.every(3).hours.at(':00').do(self.run_job)
        logger.info(schedule.jobs)

        try:
            while True:
                schedule.run_pending()
                time.sleep(30)
        except KeyboardInterrupt:
            logger.warning('KeyboardInterrupt: Stopped scheduler')
        except Exception as e:
            logger.error(e)

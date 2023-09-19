from raven_core.logging.exceptions import NotBeingTrackedException, BotException, DoesNotExistException
from raven_core.logging.logger import configure_logging, logger
from raven_core.db.raven_db import RavenDb
import schedule
import time
import math
import random


class RavenScraper:
    def __init__(self):
        self._raven_db = RavenDb()
        self._scraper_schedule = []
        configure_logging()

    def _print_schedule(self):
        if self._scraper_schedule:
            logger.info('Product ID\t\tNext Run\t\t\tStatus')
            for item in self._scraper_schedule:
                logger.info(f'{item["product_id"]}\t\t{item["next_run"]}\t{item["status"]}')

    def run_job(self, product_id):
        status: str = 'n/a'
        try:
            price: float = self._raven_db.scrape_for_product_price(product_id)
            status: str = f'Done: {price}'
        except NotBeingTrackedException as e:
            logger.warning(e)
            status: str = 'No Longer Tracking'
        except DoesNotExistException as e:
            logger.error(e.log())
            status: str = 'Does Not Exist'
        except BotException as e:
            logger.error(e.log())
            status: str = 'Bot Detected'
        except Exception as e:
            logger.error(e)
            status: str = 'Error'
        finally:
            [item for item in self._scraper_schedule if item.get('product_id') == product_id][0]['status'] = status
            schedule.clear(product_id)

    def _create_schedule(self, schedule_period_sec: int, interval_buffer_sec: int):
        self._print_schedule()  # print schedule from prev 24 hours, to show status changes
        self._scraper_schedule = []  # clear schedule in prep for new one

        product_list: list = self._raven_db.get_product_id_list()
        random.shuffle(product_list)
        logger.info(f'{len(product_list)} products to scrape')

        interval_sec: int = math.floor(schedule_period_sec / len(product_list))
        if interval_sec <= interval_buffer_sec:
            interval_sec = interval_buffer_sec + 1

        for index, product_id in enumerate(product_list):
            min_start_time: int = index * interval_sec + interval_buffer_sec
            max_start_time: int = ((index + 1) * interval_sec)
            schedule_start_time_sec: int = random.randrange(min_start_time, max_start_time)

            schedule.every(schedule_start_time_sec).seconds.do(self.run_job, product_id).tag(product_id, 'scrape')

        for job in schedule.get_jobs('scrape'):
            self._scraper_schedule.append({
                'product_id': job.job_func.args[0],
                'next_run': job.next_run,
                'status': '......'
            })

        self._print_schedule()  # print newly created schedule

    def run_scraper(self) -> None:
        logger.info('Running Raven Scraper')

        schedule_period_sec: int = 12*60*60
        interval_buffer_sec: int = 10

        # create a randomized 12-hour schedule every day at midnight and noon
        schedule.every().day.at('00:00').do(self._create_schedule, schedule_period_sec, interval_buffer_sec)
        schedule.every().day.at('12:00').do(self._create_schedule, schedule_period_sec, interval_buffer_sec)

        try:
            while True:
                schedule.run_pending()
                time.sleep(1)
        except KeyboardInterrupt:
            logger.warning('KeyboardInterrupt: Stopped scraper')
        except Exception as e:
            logger.error(e)

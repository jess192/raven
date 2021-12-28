import sys
from utils.amazon_provider import AmazonProvider
from raven_core.db.raven_db import RavenDb
from raven_core.utils.logger import configure_logging
from utils.exceptions import BotException, NotValidURL
from loguru import logger


if __name__ == '__main__':
    configure_logging()
    url = sys.argv[1]

    try:
        amazon_item_data = AmazonProvider().get_item_info(url)
        RavenDb().insert_item(amazon_item_data)
    except BotException as e:
        logger.error(e)
    except NotValidURL as e:
        logger.error(e)
    except Exception as e:
        logger.error(e)



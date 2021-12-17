import sys
from raven.utils.amazon_provider import AmazonProvider
from db.raven_db import RavenDb
from raven.utils.exceptions import BotException, NotValidURL

if __name__ == '__main__':
    url = sys.argv[1]

    try:
        amazon_item_data = AmazonProvider().get_item_info(url)
        RavenDb().insert_item(amazon_item_data)
    except BotException as e:
        print('BotException: ', e)
    except NotValidURL as e:
        print('NotValidURL: ', e)
    except Exception as e:
        print('Exception: ', e)



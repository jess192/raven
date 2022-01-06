from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from raven_core.db.raven_db import RavenDb
from raven_core.logging.logger import configure_logging, logger
from raven_core.logging.exceptions import BotException, NotValidURL

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

configure_logging()


@app.get('/prices')
def get_prices():
    try:
        product_prices: dict = RavenDb().select_products_prices()
    except Exception as e:
        logger.error('Unable to get prices for products ', e)
        return {'status': 'ERROR'}
    else:
        logger.success('Successfully got prices from API')
        return {
            'status': 'SUCCESS',
            'product_prices': product_prices
        }


@app.post('/insert')
def add_product(url: str):
    logger.info(f'Inserting {url}')

    try:
        RavenDb().insert_product(url)
    except BotException as e:
        logger.error(e)
        return {'status': 'ERROR'}
    except NotValidURL as e:
        logger.error(e)
        return {'status': 'ERROR'}
    except Exception as e:
        logger.error('Unable to insert product ', e)
        return {'status': 'ERROR'}
    else:
        logger.success(f'Successfully inserted {url}')
        return {'status': 'SUCCESS'}

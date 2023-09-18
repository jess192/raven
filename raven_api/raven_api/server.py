from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from raven_core.db.raven_db import RavenDb
from raven_core.logging.logger import configure_logging, logger
from raven_core.logging.exceptions import BotException, InvalidURLException, UniqueProductException, \
    DoesNotExistException

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

configure_logging()


@app.get('/products', status_code=status.HTTP_200_OK)
def get_prices():
    try:
        product_prices: dict = RavenDb().select_products_prices()
    except Exception as e:
        exception_msg = f'Unable to get list of products. {e}'
        logger.error(exception_msg)
        raise HTTPException(status_code=404, detail=exception_msg)
    else:
        logger.success('Successfully got prices from API')
        return product_prices


@app.post('/products', status_code=status.HTTP_201_CREATED)
def add_product(url: str):
    logger.info(f'Inserting {url}')

    try:
        RavenDb().insert_product(url)
    except InvalidURLException as e:
        logger.error(e.log())
        raise HTTPException(status_code=400, detail=str(e))
    except UniqueProductException as e:
        logger.error(e.log())
        raise HTTPException(status_code=400, detail=str(e))
    except DoesNotExistException as e:
        logger.error(e.log())
        raise HTTPException(status_code=400, detail=str(e))
    except BotException as e:
        logger.error(e.log())
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        exception_msg = f'Unable to insert product. {e}'
        logger.error(exception_msg)
        raise HTTPException(status_code=500, detail=exception_msg)
    else:
        success_msg = f'Successfully inserted {url}'
        logger.success(success_msg)
        return success_msg


@app.delete('/products', status_code=status.HTTP_204_NO_CONTENT)
def delete_product(product_id: str):
    logger.info(f'Deleting {product_id}')

    try:
        RavenDb().delete_product(product_id)
    except Exception as e:
        logger.error('Unable to delete product ', e)
        raise HTTPException(status_code=500, detail='Unable to delete product.')
    else:
        logger.success(f'Successfully deleted {product_id}')
        return

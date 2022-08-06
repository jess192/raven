from raven_core.logging.logger import configure_logging, logger
from raven_core.utils import get_env
import uvicorn

if __name__ == '__main__':
    configure_logging()
    logger.info('Running Raven API')

    try:
        uvicorn.run(
            app='raven_api.server:app',
            host='0.0.0.0',
            port=int(get_env('RAVEN_API_PORT')),
            ssl_keyfile=get_env('SSL_KEYFILE', True),
            ssl_certfile=get_env('SSL_CERT_FILE', True)
        )
    except KeyboardInterrupt:
        logger.info('KeyboardInterrupt: exiting raven_api')
    except Exception as e:
        logger.error(e)

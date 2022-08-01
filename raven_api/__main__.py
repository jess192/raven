from raven_core.logging.logger import configure_logging, logger
import os
from dotenv import load_dotenv
import uvicorn


if __name__ == '__main__':
    configure_logging()
    logger.info('Running Raven API')
    load_dotenv()

    try:
        uvicorn.run(
            app='raven_api.server:app',
            host='0.0.0.0',
            port=int(os.getenv('RAVEN_API_PORT')),
            ssl_keyfile=os.getenv('SSL_KEYFILE'),
            ssl_certfile=os.getenv('SSL_CERT_FILE')
        )
    except KeyboardInterrupt:
        logger.info('KeyboardInterrupt: exiting raven_api')
    except Exception as e:
        logger.error(e)

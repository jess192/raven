from raven_core.logging.logger import configure_logging, logger
import uvicorn


if __name__ == '__main__':
    configure_logging()
    logger.info('Running Raven API')

    try:
        uvicorn.run(
            app='raven_api.server:app',
            host='0.0.0.0',
            port=8090,
            reload=True
        )
    except KeyboardInterrupt:
        logger.info('KeyboardInterrupt: exiting raven_api')
    except Exception as e:
        logger.error(e)

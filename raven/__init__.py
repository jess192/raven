from loguru import logger
import sys
import os


logging_config = {
    'handlers': [
        {
            'sink': sys.stdout,
            'level': 'INFO'
        },
        {
            'sink': os.path.dirname(__file__) + '/logs/{time:MM_DD_YYYY_ddd}.log',
            'level': 'ERROR',
            'rotation': '00:00',
            'retention': '30 days'
        }
    ]
}

try:
    logger.configure(**logging_config)
except Exception as e:
    print('Logger configuration failed. ', e)
    sys.exit(1)
finally:
    logger.info('Logging setup complete')

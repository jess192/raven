class BotException(Exception):
    def __init__(self, provider: str, url: str, user_agent: str):
        self.provider: str = provider
        self.url: str = url
        self.user_agent: str = user_agent

    def __str__(self):
        return f'{self.provider} thinks you are a bot trying to access {self.url} ' \
               f'with user_agent: {self.user_agent}'


class InvalidURLException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'{self.url}  is not a valid URL.'


class UniqueProductException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'{self.url} is already being tracked.'


class DoesNotExistException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'{self.url} does not exist.'


class NotBeingTrackedException(Exception):
    def __init__(self, product_id: str):
        self.product_id: str = product_id

    def __str__(self):
        return f'{self.product_id} is no longer being tracked.'

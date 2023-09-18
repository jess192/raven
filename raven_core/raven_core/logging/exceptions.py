class BotException(Exception):
    def __init__(self, provider: str, url: str, user_agent: str):
        self.provider: str = provider
        self.url: str = url
        self.user_agent: str = user_agent

    def __str__(self):
        return f'{self.provider} thinks you are a bot. Try again.'

    def log(self):
        return f'{self.provider} Bot Exception. URL: {self.url} USER_AGENT: {self.user_agent}'


class InvalidURLException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'Invalid url. Try again.'

    def log(self):
        return f'Invalid URL Exception: {self.url}'


class UniqueProductException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'That product is already being tracked.'

    def log(self):
        return f'Unique Product Exception: {self.url}'


class DoesNotExistException(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'That product does not exist.'

    def log(self):
        return f'Does Not Exist Exception: {self.url}'


class NotBeingTrackedException(Exception):
    def __init__(self, product_id: str):
        self.product_id: str = product_id

    def __str__(self):
        return f'{self.product_id} is no longer being tracked.'

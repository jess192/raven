class BotException(Exception):
    def __init__(self, provider: str, url: str):
        self.provider: str = provider
        self.url: str = url

    def __str__(self):
        return f'{self.provider} thinks you are a bot trying to access {self.url}'


class NotValidURL(Exception):
    def __init__(self, url: str):
        self.url: str = url

    def __str__(self):
        return f'{self.url}  is not valid.'

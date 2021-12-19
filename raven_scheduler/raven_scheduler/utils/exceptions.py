class BotException(Exception):
    def __init__(self, provider):
        self.provider = provider

    def __str__(self):
        return f'{self.provider}  thinks you are a bot.'


class NotValidURL(Exception):
    def __init__(self, url):
        self.url = url

    def __str__(self):
        return f'{self.url}  is not valid.'

import requests
from urllib.parse import urlparse, ParseResult
from pyuseragents import random as random_useragent
from bs4 import BeautifulSoup
from datetime import datetime
from typing import Optional
from raven_core.logging.exceptions import BotException, InvalidURLException, DoesNotExistException


class AmazonProvider:
    def __init__(self):
        self._amazon_headers: dict = self._generate_headers()

    @staticmethod
    def _get_random_agent():
        random_agent: str = random_useragent()
        while 'Mobile' in random_agent:
            random_agent: str = random_useragent()
        return random_agent

    def _generate_headers(self) -> dict:
        return {
            'user-agent': self._get_random_agent(),
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-dest': 'document',
            'accept-language': 'en-US',
        }

    @staticmethod
    def _format_url(url: str) -> str:
        if not url.startswith('http://') and not url.startswith('https://'):
            url = 'https://' + url
        return url

    @staticmethod
    def _get_amazon_id(url: str) -> str:
        parse: ParseResult = urlparse(url)
        if parse.netloc not in ['amazon.com', 'www.amazon.com']:
            raise InvalidURLException(url)

        split: list[str] = parse.path.split('/')
        if 'dp' in split:
            return split[split.index('dp')+1]
        elif 'gp' in split and split[split.index('gp')+1] == 'product':
            return split[split.index('gp')+2]
        else:
            raise InvalidURLException(url)

    def _check_if_bot(self, bs: BeautifulSoup, url: str) -> None:
        is_bot: bool = bool(bs.find_all(lambda tag: tag.name == 'p' and 'robot' in tag.text))
        is_bot: bool = is_bot or bs.find('title').get_text() == 'Sorry! Something went wrong!'

        if is_bot:
            raise BotException('Amazon', url, self._amazon_headers['user-agent'])

    def _get_beautiful_soup_response(self, url: str) -> BeautifulSoup:
        page = requests.get(url, headers=self._amazon_headers)

        if page.status_code == 404:
            raise DoesNotExistException(url)

        bs: BeautifulSoup = BeautifulSoup(page.text, 'html.parser')
        self._check_if_bot(bs, url)

        return bs

    def _get_item_title(self, bs: BeautifulSoup) -> str:
        if bs.find(id='productTitle'):
            title: str = bs.find(id='productTitle').get_text().strip()
            return title
        else:
            raise Exception('Unable to get title. ', self._amazon_headers['user-agent'])

    @staticmethod
    def _get_item_image_url(bs: BeautifulSoup) -> Optional[str]:
        image = bs.find('img', id='landingImage') or bs.find('img', id='imgBlkFront')
        image_url: Optional[str] = None

        if image:
            image_url: str = image.get('src')
        return image_url

    @staticmethod
    def _get_item_price(bs: BeautifulSoup) -> float | None:
        price = bs.find('input', {'id': 'twister-plus-price-data-price'})
        return price.get('value') if price else None

    def get_product_prices(self, amazon_id: str, url: str) -> dict:
        bs: BeautifulSoup = self._get_beautiful_soup_response(url)

        return {
            'id': amazon_id,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'price': self._get_item_price(bs)
        }

    def get_product_info(self, url: str) -> dict:
        formatted_url: str = self._format_url(url)
        product_id: str = self._get_amazon_id(formatted_url)
        bs: BeautifulSoup = self._get_beautiful_soup_response(formatted_url)

        return {
            'id': product_id,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'source': 'amazon',
            'url': formatted_url,
            'title': self._get_item_title(bs),
            'image_url': self._get_item_image_url(bs),
            'price': self._get_item_price(bs)
        }

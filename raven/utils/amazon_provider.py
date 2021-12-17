from urllib.parse import urlparse, ParseResult
from bs4 import BeautifulSoup
import requests
from datetime import datetime
from typing import Optional
from .headers import amazon_headers
from .exceptions import BotException, NotValidURL


class AmazonProvider:
    def __init__(self):
        self.headers = amazon_headers

    @staticmethod
    def _get_amazon_id(url: str) -> str:
        parse: ParseResult = urlparse(url)
        split: list[str] = parse.path.split('/')

        next_part: bool = False
        for part in split:
            if next_part:
                return part
            elif part == 'dp':
                next_part = True

        raise NotValidURL(url)

    @staticmethod
    def _check_if_bot(bs: BeautifulSoup) -> None:
        is_bot_1: bool = bool(bs.find_all(lambda tag: tag.name == 'p' and 'robot' in tag.text))
        is_bot_2: bool = bs.find('title').get_text() == 'Sorry! Something went wrong!'

        if is_bot_1 or is_bot_2:
            raise BotException('Amazon')

    @staticmethod
    def _create_url(amazon_id: str) -> str:
        return f'https://amazon.com/dp/{amazon_id}'

    @staticmethod
    def _get_item_title(bs: BeautifulSoup) -> str:
        title: str = bs.find(id='productTitle').get_text().strip()
        return title

    @staticmethod
    def _get_item_image_url(bs: BeautifulSoup) -> Optional[str]:
        image = bs.find('img', id='landingImage')
        image_url: Optional[str] = None
        if image:
            image_url: str = image.get('src')
        return image_url

    @staticmethod
    def _get_item_price(bs: BeautifulSoup) -> str or float:
        price = bs.find(class_='apexPriceToPay')
        if price:
            price = price.find(class_='a-offscreen')
            if price:
                price = float(price.get_text().lstrip('$'))
        return price

    def _get_beautiful_soup_response(self, url: str) -> BeautifulSoup:
        page = requests.get(url, headers=self.headers)
        bs: BeautifulSoup = BeautifulSoup(page.text, 'html.parser')
        self._check_if_bot(bs)

        return bs

    def get_item_prices(self, amazon_id: str):
        url: str = self._create_url(amazon_id)
        bs: BeautifulSoup = self._get_beautiful_soup_response(url)
        return {
            'id': amazon_id,
            'timestamp': datetime.now().strftime('%m/%d/%Y %H:%M:%S'),
            'price': self._get_item_price(bs)
        }

    def get_item_info(self, url: str) -> dict or None:
        print('Getting item info for ', url)

        id_: str = self._get_amazon_id(url)
        bs = self._get_beautiful_soup_response(url)

        return {
            'id': id_,
            'timestamp': datetime.now().strftime('%m/%d/%Y %H:%M:%S'),
            'source': 'amazon',
            'title': self._get_item_title(bs),
            'image_url': self._get_item_image_url(bs),
            'price': self._get_item_price(bs)
        }

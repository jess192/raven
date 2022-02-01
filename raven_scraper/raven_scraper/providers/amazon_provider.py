import requests
import random
from urllib.parse import urlparse, ParseResult
from bs4 import BeautifulSoup
from datetime import datetime
from typing import Optional
from raven_core.logging.exceptions import BotException, NotValidURL


class AmazonProvider:
    def __init__(self):
        self._amazon_headers: dict = self._generate_headers()

    @staticmethod
    def _generate_headers() -> dict:
        ff_version_list: list = [*range(70, 96)]
        linux_distro_list: list = ['Fedora', 'Ubuntu']

        ff_version: float = float(random.choice(ff_version_list))
        linux_distro: str = random.choice(linux_distro_list)

        user_agent = f'Mozilla/5.0 (X11; {linux_distro}; Linux x86_64; rv:{ff_version}) Gecko/20100101 Firefox/{ff_version}'

        return {
            'user-agent': user_agent,
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-dest': 'document',
            'accept-language': 'en-US',
        }

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
    def _check_if_bot(bs: BeautifulSoup, url: str) -> None:
        is_bot: bool = bool(bs.find_all(lambda tag: tag.name == 'p' and 'robot' in tag.text))
        is_bot: bool = is_bot or bs.find('title').get_text() == 'Sorry! Something went wrong!'

        if is_bot:
            raise BotException('Amazon', url)

    @staticmethod
    def _create_url(amazon_id: str) -> str:
        return f'https://amazon.com/dp/{amazon_id}'

    def _get_beautiful_soup_response(self, url: str) -> BeautifulSoup:
        page = requests.get(url, headers=self._amazon_headers)
        bs: BeautifulSoup = BeautifulSoup(page.text, 'html.parser')
        self._check_if_bot(bs, url)

        return bs

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
    def _get_item_price(bs: BeautifulSoup) -> float:
        price = bs.find('input', {'id': 'twister-plus-price-data-price'})
        return price.get('value') if price else None

    def get_product_prices(self, amazon_id: str) -> dict:
        url: str = self._create_url(amazon_id)
        bs: BeautifulSoup = self._get_beautiful_soup_response(url)
        return {
            'id': amazon_id,
            'timestamp': datetime.now().strftime('%m/%d/%Y %H:%M:%S'),
            'price': self._get_item_price(bs)
        }

    def get_product_info(self, url: str) -> dict:
        product_id: str = self._get_amazon_id(url)
        bs: BeautifulSoup = self._get_beautiful_soup_response(url)

        return {
            'id': product_id,
            'timestamp': datetime.now().strftime('%m/%d/%Y %H:%M:%S'),
            'source': 'amazon',
            'title': self._get_item_title(bs),
            'image_url': self._get_item_image_url(bs),
            'price': self._get_item_price(bs)
        }

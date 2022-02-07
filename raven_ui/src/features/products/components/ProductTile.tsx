import React, { useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import moment from 'moment';
import { formatDate, formatPrice } from '@/utils';
import { GlobalContext } from '@/providers/GlobalProvider';
import { Throbber } from '@/components/throbber';
import { ProductTilePropsType, PricesType } from '@/types';
import { FiTrash } from 'react-icons/fi';
import {
  ProductTileStyle,
  ProductDeleteButtonStyle,
  ProductPriceStyle,
} from './style';

type GetPriceInfoType = {
  current: {
    timestamp: string,
    price: number
  },
  max: {
    timestamp: string,
    price: number
  },
  min: {
    timestamp: string,
    price: number
  },
}

// TODO - API should be returning this info!
const getPriceInfo = (prices: PricesType[]): GetPriceInfoType => {
  const filterPrice = prices.filter((x: PricesType) => x.PRICE !== null);
  const current = prices.at(-1);
  const sort = filterPrice.sort((a: PricesType, b: PricesType) => b.PRICE - a.PRICE);

  return {
    current: {
      timestamp: current.TIMESTAMP,
      price: current.PRICE,
    },
    max: {
      timestamp: filterPrice.length ? sort[0].TIMESTAMP : null,
      price: filterPrice.length ? sort[0].PRICE : null,
    },
    min: {
      timestamp: filterPrice.length ? sort.at(-1).TIMESTAMP : null,
      price: filterPrice.length ? sort.at(-1).PRICE : null,
    },
  };
};

const fromNow = (timestamp: string) => moment(timestamp, 'MM/DD/YYYY HH:mm:ss').fromNow();

export function ProductTile(props: ProductTilePropsType) {
  const { product } = props;
  const priceInfo: GetPriceInfoType = getPriceInfo(product.PRICES);

  const { dispatch } = useContext(GlobalContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteProduct = () => {
    const DELETE_URL: string = 'http://192.168.0.169:8090/?product_id='.concat(product.ID);

    setIsDeleting(true);

    axios.delete(DELETE_URL)
      .then((response: AxiosResponse) => {
        if (response.data.status === 'SUCCESS') {
          dispatch({ type: 'DELETE_PRODUCT', value: product.ID });
        } else {
          throw new Error('not successful');
        }
      })
      .catch((err: any) => {
        console.log('error', err);
      })
      .then(() => {
        setIsDeleting(false);
      });
  };

  if (isDeleting) {
    return (
      <ProductTileStyle>
        <div className="throbber-container">
          <Throbber />
        </div>
      </ProductTileStyle>
    );
  }

  // TODO - get url from API
  const productURL = 'https://amazon.com/dp/'.concat(product.ID);

  return (
    <ProductTileStyle>
      <ProductDeleteButtonStyle onClick={deleteProduct}><FiTrash /></ProductDeleteButtonStyle>

      <a href={productURL} target="__blank">
        <img src={product.IMAGE_URL} alt={product.TITLE} />
      </a>

      <div className="product-title">{product.TITLE}</div>

      <div className="product-price-container">
        <ProductPriceStyle type="current">
          <div>Current:</div>
          <div>
            <div>{formatPrice(priceInfo.current.price)}</div>
            <div>{fromNow(priceInfo.current.timestamp)}</div>
          </div>
        </ProductPriceStyle>

        <ProductPriceStyle type="low">
          <div>Low:</div>
          <div>
            <div>{formatPrice(priceInfo.min.price)}</div>
            <div>{fromNow(priceInfo.min.timestamp)}</div>
          </div>
        </ProductPriceStyle>

        <ProductPriceStyle type="high">
          <div>High:</div>
          <div>
            <div>{formatPrice(priceInfo.max.price)}</div>
            <div>{fromNow(priceInfo.max.timestamp)}</div>
          </div>
        </ProductPriceStyle>
      </div>
    </ProductTileStyle>
  );
}

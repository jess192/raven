import React from 'react';
import moment from 'moment';
import { formatDate, formatPrice } from '@/utils';
import { ProductTileProps, PricesType } from './types';
import {
  ProductTileStyle,
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
const getPriceInfo = (prices: [PricesType]): GetPriceInfoType => {
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

export function ProductTile(props: ProductTileProps) {
  const { product } = props;
  const priceInfo: GetPriceInfoType = getPriceInfo(product.PRICES);

  return (
    <ProductTileStyle>
      <img src={product.IMAGE_URL} alt={product.TITLE} />

      <div className="product-title">{product.TITLE}</div>

      <div className="product-price-container">
        <ProductPriceStyle type="current">
          <div>Current:</div>
          <div>{formatPrice(priceInfo.current.price)}</div>
          {/* <div>{fromNow(priceInfo.current.timestamp)}</div> */}
        </ProductPriceStyle>

        <ProductPriceStyle type="low">
          <div>Low:</div>
          <div>{formatPrice(priceInfo.min.price)}</div>
          {/* <div>{fromNow(priceInfo.min.timestamp)}</div> */}
        </ProductPriceStyle>

        <ProductPriceStyle type="high">
          <div>High:</div>
          <div>{formatPrice(priceInfo.max.price)}</div>
          {/* <div>{fromNow(priceInfo.max.timestamp)}</div> */}
        </ProductPriceStyle>
      </div>
    </ProductTileStyle>
  );
}

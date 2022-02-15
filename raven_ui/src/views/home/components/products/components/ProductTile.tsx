import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { formatPrice } from '@/utils/formatting';
import { useDeleteProduct } from '@/api';
import { ProductTilePropsType, PricesType } from '../types';
import { ProductTileStyle, ProductDeleteButtonStyle, ProductPriceStyle } from '../style';

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

// TODO - create fromNow function
const fromNow = (timestamp: string) => timestamp;

export function ProductTile(props: ProductTilePropsType) {
  const { product } = props;
  const productURL = 'https://amazon.com/dp/'.concat(product.ID); // TODO - get url from API
  const priceInfo: GetPriceInfoType = getPriceInfo(product.PRICES);
  const { mutate, isLoading } = useDeleteProduct();

  return (
    <ProductTileStyle>
      <ProductDeleteButtonStyle onClick={() => mutate(product.ID)}>
        {isLoading ? '...' : <FiTrash />}
      </ProductDeleteButtonStyle>

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

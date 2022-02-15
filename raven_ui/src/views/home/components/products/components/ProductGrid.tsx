import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Throbber } from '@/components/Throbber';
import { SortByEnum } from '@/views/home/types';
import { HomeContext } from '@/views/home/context';
import { ProductType, ProductActionEnum } from '../types';
import { ProductsGridStyle } from '../style';
import { ProductTile } from './ProductTile';
import { ProductContext } from '../context';

// TODO - type
const filterProducts = (filtering: any) => {
  const { productList, sort, search, availability, minPrice, maxPrice } = filtering;

  const filterMe = productList.filter((product: ProductType) => {
    const title = product.TITLE.toLowerCase();
    const currentPrice = product.PRICES.at(-1).PRICE;

    const searchFilter = !search || search.some(
      (searchString: string) => title.indexOf(searchString) !== -1,
    );
    const availabilityFilter = !availability || currentPrice !== null;
    const minPriceFilter = minPrice > 0 ? currentPrice >= minPrice : true;
    const maxPriceFilter = maxPrice > 0 && maxPrice >= minPrice
      ? currentPrice <= maxPrice && currentPrice !== null : true;

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });

  switch (sort) {
    case SortByEnum.RECENTLY_ADDED:
      return filterMe;
    case SortByEnum.NOT_RECENTLY_ADDED:
      return filterMe.reverse();
    case SortByEnum.LOW_TO_HIGH:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceA - currentPriceB;
      });
    case SortByEnum.HIGH_TO_LOW:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceB - currentPriceA;
      });
    default:
      return filterMe;
  }
};

export default function ProductGrid() {
  const product = useContext(ProductContext);
  const home = useContext(HomeContext);
  const [productItemsFiltered, setProductItemsFiltered] = useState(product.state.productList);

  const GET_URL: string = 'http://192.168.0.169:8090/prices';
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO - API should return this list reversed
  useEffect(() => {
    setIsLoaded(false);

    axios.get(GET_URL)
      .then((response: AxiosResponse) => {
        if (response.data.status === 'SUCCESS') {
          product.dispatch({
            type: ProductActionEnum.SET_PRODUCT_LIST,
            value: response.data.product_prices.reverse(),
          });
        } else {
          throw new Error('not successful');
        }
      })
      .catch((err: any) => {
        setError(err);
      })
      .then(() => {
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    const filtering = {
      productList: product.state.productList,
      sort: home.state.sort,
      search: home.state.search,
      availability: home.state.availability,
      minPrice: home.state.minPrice,
      maxPrice: home.state.maxPrice,
    };
    setProductItemsFiltered(filterProducts(filtering));
  }, [product.state.productList, home.state]);

  if (error) {
    return (<ProductsGridStyle>{'Error '.concat(error)}</ProductsGridStyle>);
  }

  if (!isLoaded) {
    return (
      <ProductsGridStyle>
        <div className="throbber-container">
          <Throbber />
        </div>
      </ProductsGridStyle>
    );
  }

  return (
    <>
      <div>
        Showing {productItemsFiltered.length} out of {product.state.productList.length} items
      </div>

      <ProductsGridStyle>
        {productItemsFiltered.map((item: ProductType, index: number) => (
          <ProductTile
            key={'product-tile-'.concat(index.toString())}
            product={item}
          />
        ))}
      </ProductsGridStyle>
    </>
  );
}

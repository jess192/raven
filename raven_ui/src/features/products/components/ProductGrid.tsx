import React from 'react';
import { ProductListType, FilterType } from '@/types';
import { Throbber } from '@/components/throbber';
import { ProductsGridStyle } from './style';
import { ProductTile } from '.';
import { ProductType, ProductGridProps } from './types';

const filterProducts = (productItems: ProductListType, filter: FilterType) => {
  const { search, availability, price } = filter;

  return productItems.filter((product: ProductType) => {
    const title = product.TITLE.toLowerCase();
    const currentPrice = product.PRICES.at(-1).PRICE;

    const searchFilter = !search || search.some((searchString: string) => {
      return title.indexOf(searchString) !== -1;
    });
    const availabilityFilter = !availability || currentPrice !== null;
    const minPriceFilter = price.min > 0 ? currentPrice >= price.min : true;
    const maxPriceFilter = price.max > 0 && price.max >= price.min
      ? currentPrice <= price.max && currentPrice !== null : true;

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });
};

export function ProductGrid(props: ProductGridProps) {
  const {
    productItems, filter, error, loading,
  } = props;

  if (error) {
    return (<ProductsGridStyle>{'Error '.concat(error)}</ProductsGridStyle>);
  }
  if (loading) {
    return (
      <ProductsGridStyle>
        <div className="throbber-container">
          <Throbber />
        </div>
      </ProductsGridStyle>
    );
  }

  const productItemsFiltered = filterProducts(productItems, filter);

  return (
    <ProductsGridStyle>
      {productItemsFiltered.map((item: ProductType, index: number) => (
        <ProductTile
          key={'product-tile-'.concat(index.toString())}
          product={item}
        />
      ))}
    </ProductsGridStyle>
  );
}

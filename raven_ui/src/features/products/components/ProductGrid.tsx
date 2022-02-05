import React, { useEffect, useState } from 'react';
import { ProductType, FilterType, ProductGridPropsType } from '@/types';
import { SortBy } from '@/types/enums';
import { Throbber } from '@/components/throbber';
import { ProductsGridStyle } from './style';
import { ProductTile } from '.';

const filterProducts = (productItems: ProductType[], filter: FilterType, sortBy: SortBy) => {
  const { search, availability, price } = filter;

  const filterMe = productItems.filter((product: ProductType) => {
    const title = product.TITLE.toLowerCase();
    const currentPrice = product.PRICES.at(-1).PRICE;

    const searchFilter = !search || search.some(
      (searchString: string) => title.indexOf(searchString) !== -1,
    );
    const availabilityFilter = !availability || currentPrice !== null;
    const minPriceFilter = price.min > 0 ? currentPrice >= price.min : true;
    const maxPriceFilter = price.max > 0 && price.max >= price.min
      ? currentPrice <= price.max && currentPrice !== null : true;

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });

  switch (sortBy) {
    case SortBy.RECENTLY_ADDED:
      return filterMe;
    case SortBy.NOT_RECENTLY_ADDED:
      return filterMe.reverse();
    case SortBy.LOW_TO_HIGH:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceA - currentPriceB;
      });
    case SortBy.HIGH_TO_LOW:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceB - currentPriceA;
      });
    default:
      return filterMe;
  }
};

export function ProductGrid(props: ProductGridPropsType) {
  const {
    productItems, filter, sortBy, error, loading,
  } = props;

  const [productItemsFiltered, setProductItemsFiltered] = useState(productItems);

  useEffect(() => {
    setProductItemsFiltered(filterProducts(productItems, filter, sortBy));
  }, [productItems, filter, sortBy]);

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

  return (
    <>
      <div>Showing {productItemsFiltered.length} out of {productItems.length} items </div>

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

import React from 'react';
import { ProductsGridStyle } from './style';
import { ProductListType } from '@/types';
import { Throbber } from '@/components/throbber';
import { ProductTile } from '.';
import { ProductType, ProductGridProps } from './types';

const showItems = (productItems: ProductListType, error: string | null, loading: boolean) => {
  if (error) {
    return 'Error '.concat(error);
  }
  if (loading) {
    return (
      <div className="throbber-container">
        <Throbber />
      </div>
    );
  }
  return (
    productItems.map((item: ProductType, index) => (
      <ProductTile
        key={'product-tile-'.concat(index.toString())}
        product={item}
      />
    ))
  );
};

export function ProductGrid(props: ProductGridProps) {
  const {
    productItems, searchFilter, error, loading,
  } = props;
  return (
    <ProductsGridStyle>
      {showItems(productItems, error, loading)}
    </ProductsGridStyle>
  );
}

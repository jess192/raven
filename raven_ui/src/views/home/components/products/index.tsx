import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '@/views/home/context';
import { ProductsGridStyle } from '@/views/home/components/products/style';
import { Throbber } from '@/components/Throbber';
import { ProductType } from '@/views/home/components/products/types';
import { ProductTile } from '@/views/home/components/products/components/ProductTile';
import { useProducts } from '@/api';
import { filterProducts } from './utils/filterProducts';

export default function Products() {
  const { isLoading, isError, data, error } = useProducts();
  const home = useContext(HomeContext); // make a wrapper hook for this..
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (!data) {
      return;
    }

    const filtering = {
      productList: data.product_prices,
      sort: home.state.sort,
      search: home.state.search,
      availability: home.state.availability,
      minPrice: home.state.minPrice,
      maxPrice: home.state.maxPrice,
    };
    setProductsFiltered(filterProducts(filtering));
  }, [data, home.state]);

  if (isLoading) {
    return (
      <ProductsGridStyle>
        <div className="throbber-container">
          <Throbber />
        </div>
      </ProductsGridStyle>
    );
  }

  if (isError) {
    return (<ProductsGridStyle>Error: {error}</ProductsGridStyle>);
  }

  return (
    <>
      <div>
        Showing {productsFiltered.length} out of {data.product_prices.length} items
      </div>

      <ProductsGridStyle>
        {productsFiltered.map((item: ProductType, index: number) => (
          <ProductTile
            key={'product-tile-'.concat(index.toString())}
            product={item}
          />
        ))}
      </ProductsGridStyle>
    </>
  );
}

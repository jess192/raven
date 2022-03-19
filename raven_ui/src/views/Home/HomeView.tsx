import React, { useContext, useEffect, useState } from 'react';
import { useProducts } from '@/api';
import Throbber from '@/components/Throbber';
import { ProductType } from '@/api/types';
import { HomeContext } from './context';
import { filterProducts } from './utils/filterProducts';
import { HomeThrobberWrapperStyle, ProductsWrapperStyle } from './style';
import { HomeActionsEnum, FilterType, SortByEnum } from './types';
import Filter from './components/Filter';
import InsertCard from './components/InsertCard';
import ProductCard from './components/ProductCard';

export default function HomeView() {
  const { state, dispatch } = useContext(HomeContext);
  const { isLoading, isError, data, error } = useProducts();
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }

    const filter: FilterType = {
      search: state.search,
      availability: state.availability,
      price: state.price,
      sort: state.sort,
    };

    setProductsFiltered(filterProducts(data.products, filter));
  }, [data, state]);

  if (isLoading) {
    return (
      <ProductsWrapperStyle>
        <HomeThrobberWrapperStyle>
          <Throbber
            squareSize={120}
            thickness={16}
          />
        </HomeThrobberWrapperStyle>
      </ProductsWrapperStyle>
    );
  }

  if (isError) {
    return (<ProductsWrapperStyle>Error: {error}</ProductsWrapperStyle>);
  }

  return (
    <>
      <Filter
        search={state.search}
        setSearch={(val: string) => dispatch({ type: HomeActionsEnum.SET_SEARCH, value: val })}
        availability={state.availability}
        setAvailability={() => dispatch({ type: HomeActionsEnum.SET_AVAILABILITY })}
        priceRange={{ min: data.minPrice, max: data.maxPrice }}
        price={state.price}
        setPrice={(val: number[]) => dispatch({ type: HomeActionsEnum.SET_PRICE, value: val })}
        resetFilters={() => dispatch({ type: HomeActionsEnum.RESET_FILTERS })}
        numProducts={data.products.length}
        numProductsFiltered={productsFiltered.length}
        sort={state.sort}
        sortOptions={[
          SortByEnum.RECENTLY_ADDED,
          SortByEnum.NOT_RECENTLY_ADDED,
          SortByEnum.LOW_TO_HIGH,
          SortByEnum.HIGH_TO_LOW,
        ]}
        setSort={(val: SortByEnum) => dispatch({ type: HomeActionsEnum.SET_SORT, value: val })}
      />

      <ProductsWrapperStyle>
        <InsertCard />

        {productsFiltered.map((product: ProductType) => (
          <ProductCard
            key={'product-card-'.concat(product.id)}
            img={product.imageURL}
            productID={product.id}
            title={product.title}
            provider={product.provider}
            providerURL={product.providerURL}
            price={product.currentPrice.price}
            timestamp={product.currentPrice.timestamp}
            percentChange={product.percentChange}
            firstPrice={product.firstPrice.price}
            firstTimestamp={product.firstPrice.timestamp}
          />
        ))}
      </ProductsWrapperStyle>
    </>
  );
}

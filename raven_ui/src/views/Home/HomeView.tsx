import React, { useContext, useEffect, useState } from 'react';
import { useProducts } from '@/api';
import Throbber from '@/components/Throbber';
import { HomeContext } from './context';
import { filterProducts } from './utils/filterProducts';
import { HomeThrobberWrapperStyle, ProductsWrapperStyle } from './style';
import { ProductType, HomeActionsEnum, FilterType, SortByEnum } from './types';
import Filter from './components/Filter';
import InsertCard from './components/InsertCard';
import ProductCard from './components/ProductCard';

export default function HomeView() {
  const { state, dispatch } = useContext(HomeContext);
  const { isLoading, isError, data, error } = useProducts();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: undefined, max: undefined });

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

    setProductsFiltered(filterProducts(data.product_prices, filter));

    // TODO - API should return this
    let min: number = 0;
    let max: number = 0;
    data.product_prices.forEach((product: ProductType) => {
      const curr: number = product.PRICES.at(-1).PRICE;
      if (curr < min) {
        min = curr;
      }
      if (curr > max) {
        max = curr;
      }
    });
    setPriceRange({ min, max });
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
        priceRange={priceRange}
        price={state.price}
        setPrice={(val: number[]) => dispatch({ type: HomeActionsEnum.SET_PRICE, value: val })}
        resetFilters={() => dispatch({ type: HomeActionsEnum.RESET_FILTERS })}
        numProducts={data.product_prices.length}
        numProductsFiltered={productsFiltered.length}
        sort={state.sort}
        sortOptions={[
          SortByEnum.RECENTLY_ADDED,
          SortByEnum.NOT_RECENTLY_ADDED,
          SortByEnum.LOW_TO_HIGH,
          SortByEnum.HIGH_TO_LOW
        ]}
        setSort={(val: SortByEnum) => dispatch({ type: HomeActionsEnum.SET_SORT, value: val })}
      />

      <ProductsWrapperStyle>
        <InsertCard />

        {productsFiltered.map((product: ProductType) => {
          // TODO - API should be returning this info
          const currentPrice: number = product.PRICES.at(-1).PRICE;
          const currentTimestamp: string = product.PRICES.at(-1).TIMESTAMP;
          const firstPrice: number = product.PRICES.at(0).PRICE;
          const firstTimestamp: string = product.PRICES.at(0).TIMESTAMP;

          const percentageChange = (initial: number, final: number) => {
            if (initial === null || final === null) {
              return 0;
            }
            return parseFloat((((final - initial) / initial) * 100).toFixed(1));
          };

          return (
            <ProductCard
              key={'product-card-'.concat(product.ID)}
              img={product.IMAGE_URL}
              productID={product.ID}
              title={product.TITLE}
              price={currentPrice}
              timestamp={currentTimestamp}
              percentageChange={percentageChange(firstPrice, currentPrice)}
              firstPrice={firstPrice}
              firstTimestamp={firstTimestamp}
            />
          );
        })}
      </ProductsWrapperStyle>
    </>
  );
}

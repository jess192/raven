import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '@/providers/GlobalProvider';
import { InsertProduct, ProductGrid } from './components';

const axios = require('axios').default;

const GET_URL: string = 'http://192.168.0.169:8090/prices';

const ProductContainerStyle = styled.div`
  height: calc(100vh - 87px);
  width: 80%;
`;

export function Products() {
  const { state, dispatch } = useContext(GlobalContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO - API should return this list reversed
  useEffect(() => {
    setIsLoaded(false);

    axios.get(GET_URL)
      .then((response: any) => {
        if (response.data.status === 'SUCCESS') {
          dispatch({ type: 'SET_PRODUCT_LIST', value: response.data.product_prices.reverse() });
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
  }, [state.insertProductNew]);

  return (
    <ProductContainerStyle>
      <InsertProduct />
      <ProductGrid
        productItems={state.productListFilter}
        searchFilter={state.searchFilter}
        error={error}
        loading={!isLoaded}
      />
    </ProductContainerStyle>
  );
}

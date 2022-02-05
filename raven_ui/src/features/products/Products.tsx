import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions } from '@/types/enums';
import { ProductGrid } from './components';

const GET_URL: string = 'http://192.168.0.169:8090/prices';

export function Products() {
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // TODO - API should return this list reversed
  useEffect(() => {
    setIsLoaded(false);

    axios.get(GET_URL)
      .then((response: AxiosResponse) => {
        if (response.data.status === 'SUCCESS') {
          dispatch({
            type: GlobalActions.SET_PRODUCT_LIST,
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
  }, [state.insertProductNew]);

  return (
    <ProductGrid
      productItems={state.productList}
      filter={state.filter}
      sortBy={state.sortBy}
      error={error}
      loading={!isLoaded}
    />
  );
}

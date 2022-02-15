import React, { createContext, useMemo, useReducer } from 'react';
import { ComponentChildrenProps } from '@/types';
import { ProductStateType, ProductActionType, ProductActionEnum, ProductType } from '../types';

const initialProductState = {
  productList: [{
    ID: '',
    TITLE: '',
    IMAGE_URL: '',
    PRICES: [{
      TIMESTAMP: '',
      PRICE: 0,
    }],
  }],
};

function productReducer(state: ProductStateType, action: ProductActionType) {
  switch (action.type) {
    case ProductActionEnum.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.value,
      };
    case ProductActionEnum.DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter((item: ProductType) => item.ID !== action.value),
      };
    default:
      return state;
  }
}

export const ProductContext = createContext({
  state: initialProductState,
  dispatch: null,
});

// TODO - switch to react-query
export default function ProductProvider({ children }: ComponentChildrenProps) {
  const [state, dispatch] = useReducer(productReducer, initialProductState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ProductContext.Provider value={memoizedValue}>
      { children }
    </ProductContext.Provider>
  );
}

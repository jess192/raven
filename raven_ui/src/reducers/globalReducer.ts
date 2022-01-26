import { ProductListType } from '@/types';

type StateType = {
  active: boolean,
  theme: 'LIGHT' | 'DARK',
  productList: ProductListType,
  productListFilter: ProductListType,
  insertProductNew: boolean,
  searchFilter: string[],
}

type ActionType = {
  type: string,
  value?: any
}

export const initialState = {
  active: false,
  theme: 'LIGHT',
  productList: [{
    ID: 'n/a',
    TITLE: 'n/a',
    IMAGE_URL: 'n/a',
    PRICES: [{
      TIMESTAMP: 'n/a',
      PRICE: 0,
    }],
  }],
  productListFilter: [{
    ID: 'n/a',
    TITLE: 'n/a',
    IMAGE_URL: 'n/a',
    PRICES: [{
      TIMESTAMP: 'n/a',
      PRICE: 0,
    }],
  }],
  insertProductNew: false,
  searchFilter: [''],
};

export const globalReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      return {
        ...state,
        active: !state.active,
      };
    case 'TOGGLE_THEME': // also save in localstorage
      return {
        ...state,
        theme: state.theme === 'LIGHT' ? 'DARK' : 'LIGHT',
      };
    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        productList: action.value,
        productListFilter: action.value,
        insertProductNew: false,
      };
    case 'SET_INSERT_PRODUCT_NEW':
      return {
        ...state,
        insertProductNew: true,
      };
    case 'FILTER_PRODUCT_LIST_BY_SEARCH': {
      const filterArr = action.value.toLowerCase().trim().split(' ');
      return {
        ...state,
        productListFilter: state.productList.filter((product) => {
          const title = product.TITLE.toLowerCase();
          return filterArr.some((filter: string) => title.indexOf(filter) !== -1);
        }),
        searchFilter: filterArr,
      };
    }
    default:
      return state;
  }
};

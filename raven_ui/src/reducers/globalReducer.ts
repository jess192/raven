import { ProductListType, FilterType, ProductType } from '@/types';

type StateType = {
  active: boolean,
  theme: 'LIGHT' | 'DARK',
  productList: ProductListType,
  insertProductNew: boolean,
  filter: FilterType
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
  insertProductNew: false,
  filter: {
    search: [''],
    availability: false,
    price: {
      min: 0,
      max: 0,
    },
  },
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
        insertProductNew: false,
      };
    case 'SET_INSERT_PRODUCT_NEW':
      return {
        ...state,
        insertProductNew: true,
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        productList: state.productList.filter((item: ProductType) => item.ID !== action.value),
      };
    case 'FILTER_PRODUCT_LIST_BY_SEARCH':
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.value.toLowerCase().trim().split(' '),
        },
      };
    case 'FILTER_PRODUCT_LIST_BY_AVAILABILITY':
      return {
        ...state,
        filter: {
          ...state.filter,
          availability: !state.filter.availability,
        },
      };
    case 'FILTER_PRODUCT_LIST_BY_MIN_PRICE':
      return {
        ...state,
        filter: {
          ...state.filter,
          price: {
            ...state.filter.price,
            min: action.value,
          },
        },
      };
    case 'FILTER_PRODUCT_LIST_BY_MAX_PRICE':
      return {
        ...state,
        filter: {
          ...state.filter,
          price: {
            ...state.filter.price,
            max: action.value,
          },
        },
      };
    default:
      return state;
  }
};

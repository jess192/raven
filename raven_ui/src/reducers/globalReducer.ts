import { GlobalActionType, GlobalStateType, ProductType } from '@/types';
import {
  FilterBy, GlobalActions, SortBy, Theme,
} from '@/types/enums';

export const initialState = {
  theme: Theme.LIGHT,
  productList: [{
    ID: '',
    TITLE: '',
    IMAGE_URL: '',
    PRICES: [{
      TIMESTAMP: '',
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
  sortBy: SortBy.RECENTLY_ADDED,
};

export const globalReducer = (state: GlobalStateType, action: GlobalActionType) => {
  switch (action.type) {
    case GlobalActions.TOGGLE_THEME: // also save in localstorage
      return {
        ...state,
        theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
      };
    case GlobalActions.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.value,
        insertProductNew: false,
      };
    case GlobalActions.SET_INSERT_PRODUCT_NEW:
      return {
        ...state,
        insertProductNew: true,
      };
    case GlobalActions.DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter((item: ProductType) => item.ID !== action.value),
      };
    case GlobalActions.SET_FILTER_BY: {
      switch (action.subType) {
        case FilterBy.SEARCH:
          return {
            ...state,
            filter: {
              ...state.filter,
              search: action.value.toLowerCase().trim().split(' '),
            },
          };
        case FilterBy.AVAILABILITY:
          return {
            ...state,
            filter: {
              ...state.filter,
              availability: !state.filter.availability,
            },
          };
        case FilterBy.MIN_PRICE:
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
        case FilterBy.MAX_PRICE:
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
    }
    case GlobalActions.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.value,
      };
    default:
      return state;
  }
};

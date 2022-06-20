import React, { createContext, useMemo, useReducer } from 'react';
import { ComponentChildrenProps } from '@/types';
import { HomeActionsEnum, HomeActionType, HomeStateType, SortByEnum } from '../types';

const initialHomeState = {
  sort: SortByEnum.NEWEST,
  search: '',
  availability: false,
  price: {},
};

function homeReducer(state: HomeStateType, action: HomeActionType) {
  switch (action.type) {
    case HomeActionsEnum.SET_SORT:
      return {
        ...state,
        sort: action.value,
      };
    case HomeActionsEnum.SET_SEARCH:
      return {
        ...state,
        search: action.value,
      };
    case HomeActionsEnum.SET_AVAILABILITY:
      return {
        ...state,
        availability: !state.availability,
      };
    case HomeActionsEnum.SET_PRICE:
      return {
        ...state,
        price: {
          min: action.value[0],
          max: action.value[1],
        },
      };
    case HomeActionsEnum.RESET_FILTERS:
      return initialHomeState;
    default:
      return state;
  }
}

export const HomeContext = createContext({
  state: initialHomeState,
  dispatch: null,
});

export default function HomeProvider({ children }: ComponentChildrenProps) {
  const [state, dispatch] = useReducer(homeReducer, initialHomeState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <HomeContext.Provider value={memoizedValue}>
      { children }
    </HomeContext.Provider>
  );
}

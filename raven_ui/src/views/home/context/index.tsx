import React, { createContext, useMemo, useReducer } from 'react';
import { ComponentChildrenProps } from '@/types';
import { HomeActionsEnum, SortByEnum, HomeStateType, HomeActionType } from '../types';

const initialHomeState = {
  sort: SortByEnum.RECENTLY_ADDED,
  search: [''],
  availability: false,
  minPrice: 0,
  maxPrice: 0,
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
    case HomeActionsEnum.SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.value,
      };
    case HomeActionsEnum.SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.value,
      };
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

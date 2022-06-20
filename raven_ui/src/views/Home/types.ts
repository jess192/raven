export enum HomeActionsEnum {
  SET_SORT = 'SET_SORT',
  SET_SEARCH = 'SET_SEARCH',
  SET_AVAILABILITY = 'SET_AVAILABILITY',
  SET_PRICE = 'SET_PRICE',
  RESET_FILTERS = 'RESET_FILTERS'
}

export enum SortByEnum {
  NEWEST = 'Newest',
  OLDEST = 'Oldest',
  LOW_TO_HIGH = 'Low to High',
  HIGH_TO_LOW = 'High to Low',
  HIGHEST_DECREASE = 'Highest Decrease',
  HIGHEST_INCREASE = 'Highest Increase',
}

export type FilterType = {
  sort: SortByEnum,
  search: string,
  availability: boolean,
  price: {
    min?: number,
    max?: number
  }
}

export type HomeStateType = FilterType

export type HomeActionType = {
  type: HomeActionsEnum,
  value?: any
}

export type QueryErrorType = {
  response: {
    data: {
      detail: string
    }
  }
}

export enum HomeActionsEnum {
  SET_SORT = 'SET_SORT',
  SET_SEARCH = 'SET_SEARCH',
  SET_AVAILABILITY = 'SET_AVAILABILITY',
  SET_PRICE = 'SET_PRICE',
  RESET_FILTERS = 'RESET_FILTERS'
}

export enum SortByEnum {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  LOW_TO_HIGH = 'low to high',
  HIGH_TO_LOW = 'high to low',
  HIGHEST_DECREASE = 'highest decrease',
  HIGHEST_INCREASE = 'highest increase',
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

export enum HomeActionsEnum {
  SET_SORT = 'SET_SORT',
  SET_SEARCH = 'SET_SEARCH',
  SET_AVAILABILITY = 'SET_AVAILABILITY',
  SET_MIN_PRICE = 'SET_MIN_PRICE',
  SET_MAX_PRICE = 'SET_MAX_PRICE'
}

export enum SortByEnum {
  RECENTLY_ADDED = 'RECENTLY_ADDED',
  NOT_RECENTLY_ADDED = 'NOT_RECENTLY_ADDED',
  LOW_TO_HIGH = 'LOW_TO_HIGH',
  HIGH_TO_LOW = 'HIGH_TO_LOW'
}

export type HomeStateType = {
  sort: SortByEnum,
  search: string[],
  availability: boolean,
  minPrice: number,
  maxPrice: number
}

export type HomeActionType = {
  type: HomeActionsEnum,
  value?: any
}

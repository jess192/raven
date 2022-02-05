export enum GlobalActions {
  TOGGLE_THEME = 'TOGGLE_THEME',
  SET_PRODUCT_LIST = 'SET_PRODUCT_LIST',
  SET_INSERT_PRODUCT_NEW = 'SET_INSERT_PRODUCT_NEW',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  SET_FILTER_BY = 'SET_FILTER_BY',
  SET_SORT_BY = 'SET_SORT_BY'
}

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export enum FilterBy {
  SEARCH = 'SEARCH',
  AVAILABILITY = 'AVAILABILITY',
  MIN_PRICE = 'MIN_PRICE',
  MAX_PRICE = 'MAX_PRICE'
}

export enum SortBy {
  RECENTLY_ADDED = 'RECENTLY_ADDED',
  NOT_RECENTLY_ADDED = 'NOT_RECENTLY_ADDED',
  LOW_TO_HIGH = 'LOW_TO_HIGH',
  HIGH_TO_LOW = 'HIGH_TO_LOW'
}

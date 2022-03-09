export enum HomeActionsEnum {
  SET_SORT = 'SET_SORT',
  SET_SEARCH = 'SET_SEARCH',
  SET_AVAILABILITY = 'SET_AVAILABILITY',
  SET_PRICE = 'SET_PRICE',
  RESET_FILTERS = 'RESET_FILTERS'
}

export enum SortByEnum {
  RECENTLY_ADDED = 'Recently Added',
  NOT_RECENTLY_ADDED = 'Not Recently Added', // TODO - rename
  LOW_TO_HIGH = 'Low to High',
  HIGH_TO_LOW = 'High to Low'
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

export type PricesType = {
  TIMESTAMP: string,
  PRICE: number
}

export type ProductType = {
  ID: string,
  TITLE: string,
  IMAGE_URL: string,
  PRICES: PricesType[]
}

export type ProductListType = ProductType[]

export type QueryErrorType = {
  response: {
    data: {
      detail: string
    }
  }
}

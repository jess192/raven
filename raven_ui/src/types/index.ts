import {
  GlobalActions, FilterBy, SortBy, Theme,
} from '@/types/enums';

export type GlobalStateType = {
  theme: Theme,
  productList: ProductType[],
  insertProductNew: boolean,
  filter: FilterType,
  sortBy: SortBy
}

export type GlobalActionType = {
  type: GlobalActions,
  subType?: FilterBy,
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

export type FilterType = {
  search: string[],
  availability: boolean,
  price: {
    min: number,
    max: number
  }
}

export type ProductGridPropsType = {
  productItems: ProductType[],
  filter: FilterType,
  sortBy: any,
  error: string | null,
  loading: boolean
}

export type ProductTilePropsType = {
  product: ProductType
}

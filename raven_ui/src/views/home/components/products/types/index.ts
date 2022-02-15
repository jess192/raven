export enum ProductActionEnum {
  SET_PRODUCT_LIST = 'SET_PRODUCT_LIST',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export type ProductStateType = {
  productList: ProductType[],
}

export type ProductActionType = {
  type: ProductActionEnum,
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

export type ProductTilePropsType = {
  product: ProductType
}


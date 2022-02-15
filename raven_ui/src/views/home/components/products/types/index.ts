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

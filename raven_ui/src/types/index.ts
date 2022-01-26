type ProductType = {
  ID: string,
  TITLE: string,
  IMAGE_URL: string,
  PRICES: {
    TIMESTAMP: string,
    PRICE: number
  }[]
}

export type ProductListType = ProductType[]

export type ProductType = {
  ID: string,
  TITLE: string,
  IMAGE_URL: string,
  PRICES: {
    TIMESTAMP: string,
    PRICE: number
  }[]
}

export type FilterType = {
  search: string[],
  availability: boolean,
  price: {
    min: number,
    max: number
  }
}

export type ProductListType = ProductType[]

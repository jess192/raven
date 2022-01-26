import { ProductListType } from '@/types';

// move to src/types/index.ts ??

export type PricesType = {
  TIMESTAMP: string,
  PRICE: number
}

export type ProductType = {
  ID: string,
  TITLE: string,
  IMAGE_URL: string,
  PRICES: [PricesType]
}

export type ProductTileProps = {
  product: ProductType
}

export type ProductGridProps = {
  productItems: ProductListType,
  searchFilter: string[],
  error: string | null,
  loading: boolean
}

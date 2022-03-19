import { ProvidersEnum } from '@/views/Home/components/ProductCard/types';

type PriceType = {
  price: number,
  timestamp: string
}

export type ProductType = {
  id: string,
  title: string,
  imageURL: string,
  provider: ProvidersEnum,
  providerURL: string,
  currentPrice: PriceType,
  firstPrice: PriceType,
  percentChange: number
}

export type ProductListType = ProductType[]

export type ProductsEndpointType = {
  products: ProductListType,
  minPrice: number,
  maxPrice: number
}

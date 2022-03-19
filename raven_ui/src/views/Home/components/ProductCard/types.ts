export type ProductCardPropsType = {
  img: string,
  productID: string,
  title: string,
  provider: ProvidersEnum,
  providerURL: string,
  price: number,
  timestamp: string,
  percentChange: number,
  firstPrice: number,
  firstTimestamp: string
}

export type ProductCardFrontPropsType = ProductCardPropsType & {
  setFlip: Function
};

export type ProductCardBackPropsType = {
  productID: string,
  setFlip: Function
}

export enum ProvidersEnum {
  AMAZON = 'amazon'
}

export type ProviderLinkPropsType = {
  provider: ProvidersEnum,
  url: string
}

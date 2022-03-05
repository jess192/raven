export type ProductCardPropsType = {
  img: string,
  productID: string,
  title: string,
  price: number,
  timestamp: string,
  percentageChange: number,
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
  AMAZON = 'AMAZON'
}

export type ProviderLinkPropsType = {
  provider: ProvidersEnum,
  url: string
}

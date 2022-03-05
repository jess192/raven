export type PriceSliderPropsType = {
  priceRange: {
    min: number,
    max: number,
  },
  price: {
    min?: number,
    max?: number
  },
  setPrice: Function,
}

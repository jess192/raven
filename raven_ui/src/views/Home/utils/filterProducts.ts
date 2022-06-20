import { ProductListType, ProductType } from '@/api/types';
import { FilterType, SortByEnum } from '../types';

const filterBySearch = (title: string, search: string): boolean => {
  const searchSanitize: string = search.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  const searchOr: string = searchSanitize.replace(/ /g, '|');
  return new RegExp(searchOr, 'i').test(title);
};

const filterByAvailability = (currentPrice: number, availability: boolean): boolean => (
  !availability || currentPrice !== null
);

const filterByMinPrice = (currentPrice: number, min: number): boolean => (
  min > 0 ? currentPrice >= min : true
);

const filterByMaxPrice = (currentPrice: number, max: number): boolean => (
  max > 0 ? currentPrice <= max && currentPrice !== null : true
);

const sortNotRecentlyAdded = (filtered: ProductListType): ProductListType => (
  filtered.reverse()
);

const sortLowToHigh = (filtered: ProductListType): ProductListType => (
  filtered.sort((a: ProductType, b: ProductType) => (
    a.currentPrice.price - b.currentPrice.price
  ))
);

const sortHighToLow = (filtered: ProductListType): ProductListType => (
  filtered.sort((a: ProductType, b: ProductType) => (
    b.currentPrice.price - a.currentPrice.price
  ))
);

const sortHighestDecrease = (filtered: ProductListType) => (
  filtered.sort((a: ProductType, b: ProductType) => (
    a.percentChange - b.percentChange
  ))
);

const sortHighestIncrease = (filtered: ProductListType) => (
  filtered.sort((a: ProductType, b: ProductType) => (
    b.percentChange - a.percentChange
  ))
);

// eslint-disable-next-line max-len
export const filterProducts = (productList: ProductListType, filter: FilterType): ProductListType => {
  const filtered: ProductListType = productList.filter((product: ProductType) => {
    const currentPrice: number = product.currentPrice.price;

    const searchFilter: boolean = filterBySearch(product.title, filter.search);
    const availabilityFilter: boolean = filterByAvailability(currentPrice, filter.availability);
    const minPriceFilter: boolean = filterByMinPrice(currentPrice, filter.price.min);
    const maxPriceFilter:boolean = filterByMaxPrice(currentPrice, filter.price.max);

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });

  switch (filter.sort) {
    case SortByEnum.NEWEST:
      return filtered;
    case SortByEnum.OLDEST:
      return sortNotRecentlyAdded(filtered);
    case SortByEnum.LOW_TO_HIGH:
      return sortLowToHigh(filtered);
    case SortByEnum.HIGH_TO_LOW:
      return sortHighToLow(filtered);
    case SortByEnum.HIGHEST_DECREASE:
      return sortHighestDecrease(filtered);
    case SortByEnum.HIGHEST_INCREASE:
      return sortHighestIncrease(filtered);
    default:
      return filtered;
  }
};

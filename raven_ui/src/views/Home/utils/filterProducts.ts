import { FilterType, ProductListType, ProductType, SortByEnum } from '../types';

const filterBySearch = (title: string, search: string): boolean => (
  new RegExp(search.replace(/ /g, '|'), 'i').test(title)
);

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
    a.PRICES.at(-1).PRICE - b.PRICES.at(-1).PRICE
  ))
);

const sortHighToLow = (filtered: ProductListType): ProductListType => (
  filtered.sort((a: ProductType, b: ProductType) => (
    a.PRICES.at(-1).PRICE - b.PRICES.at(-1).PRICE
  ))
);

// eslint-disable-next-line max-len
export const filterProducts = (productList: ProductListType, filter: FilterType): ProductListType => {
  const filtered: ProductListType = productList.filter((product: ProductType) => {
    const currentPrice: number = product.PRICES.at(-1).PRICE; // API should return this

    const searchFilter: boolean = filterBySearch(product.TITLE, filter.search);
    const availabilityFilter: boolean = filterByAvailability(currentPrice, filter.availability);
    const minPriceFilter: boolean = filterByMinPrice(currentPrice, filter.price.min);
    const maxPriceFilter:boolean = filterByMaxPrice(currentPrice, filter.price.max);

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });

  switch (filter.sort) {
    case SortByEnum.RECENTLY_ADDED:
      return filtered;
    case SortByEnum.NOT_RECENTLY_ADDED:
      return sortNotRecentlyAdded(filtered);
    case SortByEnum.LOW_TO_HIGH:
      return sortLowToHigh(filtered);
    case SortByEnum.HIGH_TO_LOW:
      return sortHighToLow(filtered);
    default:
      return filtered;
  }
};

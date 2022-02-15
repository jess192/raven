import { SortByEnum } from '@/views/home/types';
import { ProductType } from '@/views/home/components/products/types';

// TODO - handle this on the backend instead?
export const filterProducts = (filtering: any) => {
  const { productList, sort, search, availability, minPrice, maxPrice } = filtering;

  const filterMe = productList.filter((product: ProductType) => {
    const title = product.TITLE.toLowerCase();
    const currentPrice = product.PRICES.at(-1).PRICE;

    const searchFilter = !search || search.some(
      (searchString: string) => title.indexOf(searchString) !== -1,
    );
    const availabilityFilter = !availability || currentPrice !== null;
    const minPriceFilter = minPrice > 0 ? currentPrice >= minPrice : true;
    const maxPriceFilter = maxPrice > 0 && maxPrice >= minPrice
      ? currentPrice <= maxPrice && currentPrice !== null : true;

    return searchFilter && availabilityFilter && minPriceFilter && maxPriceFilter;
  });

  switch (sort) {
    case SortByEnum.RECENTLY_ADDED:
      return filterMe;
    case SortByEnum.NOT_RECENTLY_ADDED:
      return filterMe.reverse();
    case SortByEnum.LOW_TO_HIGH:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceA - currentPriceB;
      });
    case SortByEnum.HIGH_TO_LOW:
      return filterMe.sort((a: ProductType, b: ProductType) => {
        const currentPriceA: number = a.PRICES.at(-1).PRICE;
        const currentPriceB: number = b.PRICES.at(-1).PRICE;
        return currentPriceB - currentPriceA;
      });
    default:
      return filterMe;
  }
};

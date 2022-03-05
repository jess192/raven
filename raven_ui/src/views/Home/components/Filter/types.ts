import { SortByEnum } from '@/views/Home/types';

export type FilterSortPropsType = {
  search: string,
  setSearch: Function,
  availability: boolean,
  setAvailability: Function,
  priceRange: {
    min: number,
    max: number,
  },
  price: {
    min?: number,
    max?: number
  },
  setPrice: Function,
  resetFilters: Function,
  numProducts: number,
  numProductsFiltered: number,
  sort: SortByEnum,
  sortOptions: SortByEnum[],
  setSort: Function
}

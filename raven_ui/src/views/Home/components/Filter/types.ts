import { SortByEnum } from '@/views/Home/types';
import { DropdownSectionType } from '@/components/Dropdown/types';

export type FilterSortPropsType = {
  search: string,
  setSearch: Function,
  availability: boolean,
  setAvailability: Function,
  resetFilters: Function,
  numProducts: number,
  numProductsFiltered: number,
  sort: SortByEnum,
  sortOptions: DropdownSectionType[],
  setSort: Function
}

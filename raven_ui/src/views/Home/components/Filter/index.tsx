import React, { ChangeEvent } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch';
import PriceSlider from '@/components/PriceSlider';
import Dropdown from '@/components/Dropdown';
import { BiSearch } from 'react-icons/bi';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { FilterSortPropsType } from './types';
import {
  FilterSortStyle,
  FilterStyle,
  FilterItemStyle,
  ShowingItemsStyle,
  SortStyle,
  PriceFilterItemStyle,
  SearchFilterItemStyle,
} from './style';

export default function Filter(props: FilterSortPropsType) {
  const {
    search, setSearch, availability, setAvailability, priceRange, price,
    setPrice, resetFilters, numProducts, numProductsFiltered,
    sort, sortOptions, setSort,
  } = props;

  return (
    <FilterSortStyle>
      <FilterStyle>

        <SearchFilterItemStyle title="search for a tracked product">
          <InputBox
            type="text"
            icon={<BiSearch />}
            placeholder="search"
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            width={230}
            height={25}
          />
        </SearchFilterItemStyle>

        <FilterItemStyle title="show only products in stock">
          <ul>
            <li>in stock:</li>
            <li>
              <ToggleSwitch
                label="toggle availability"
                toggle={availability}
                setToggle={setAvailability}
              />
            </li>
          </ul>
        </FilterItemStyle>

        <PriceFilterItemStyle title="price range">
          <ul>
            <li>price:</li>
            <li>
              <PriceSlider
                priceRange={priceRange}
                price={price}
                setPrice={setPrice}
              />
            </li>
          </ul>
        </PriceFilterItemStyle>

        {/* TODO - add disabled functionality */}
        <Button
          type="button"
          onClick={() => resetFilters()}
          title="reset search filters"
        >
          reset filters
        </Button>

        <ShowingItemsStyle title="number of products displayed">
          showing {numProductsFiltered} of {numProducts}
        </ShowingItemsStyle>

      </FilterStyle>

      <SortStyle title="sort by">
        <Dropdown
          options={sortOptions}
          value={sort}
          onSelect={setSort}
          width={250}
        />
      </SortStyle>
    </FilterSortStyle>
  );
}

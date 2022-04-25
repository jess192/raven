import React from 'react';
import SearchBox from '@/components/SearchBox';
import ToggleSwitch from '@/components/ToggleSwitch';
import PriceSlider from '@/components/PriceSlider';
import Dropdown from '@/components/Dropdown';
import { FilterSortPropsType } from './types';
import {
  FilterSortStyle, FilterStyle, FilterItemStyle,
  FilterResetButtonStyle, ShowingItemsStyle, SortStyle,
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

        <FilterItemStyle>
          <SearchBox
            type="text"
            placeholder="Search"
            search={search}
            setSearch={setSearch}
          />
        </FilterItemStyle>

        <FilterItemStyle>
          <li>In stock:</li>
          <li>
            <ToggleSwitch
              toggle={availability}
              setToggle={setAvailability}
            />
          </li>
        </FilterItemStyle>

        <FilterItemStyle>
          <li>Price:</li>
          <li>
            <PriceSlider
              priceRange={priceRange}
              price={price}
              setPrice={setPrice}
            />
          </li>
        </FilterItemStyle>

        {/* TODO - add disabled functionality */}
        <FilterResetButtonStyle onClick={() => resetFilters()}>
          Reset Filters
        </FilterResetButtonStyle>

        <ShowingItemsStyle>
          Showing {numProductsFiltered} of {numProducts}
        </ShowingItemsStyle>

      </FilterStyle>

      <SortStyle>
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

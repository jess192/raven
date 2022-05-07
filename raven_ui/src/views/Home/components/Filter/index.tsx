import React, { ChangeEvent } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch';
import PriceSlider from '@/components/PriceSlider';
import Dropdown from '@/components/Dropdown';
import { BiSearch } from 'react-icons/bi';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { FilterSortPropsType } from './types';
import {
  FilterSortStyle, FilterStyle, FilterItemStyle, ShowingItemsStyle, SortStyle,
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
          <InputBox
            type="text"
            icon={<BiSearch />}
            placeholder="Search"
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            width={230}
            height={25}
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
        <Button type="button" onClick={() => resetFilters()}>
          Reset Filters
        </Button>

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

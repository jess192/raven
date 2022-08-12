import React, { ChangeEvent } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch';
import Dropdown from '@/components/Dropdown';
import { BiSearch } from 'react-icons/bi';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { FilterSortPropsType } from './types';
import { FilterSortStyle, FilterStyle, FilterItemStyle, ShowingItemsStyle, SearchFilterItemStyle } from './style';

export default function Filter(props: FilterSortPropsType) {
  const {
    search, setSearch, availability, setAvailability, resetFilters,
    numProducts, numProductsFiltered, sort, sortOptions, setSort,
  } = props;

  return (
    <FilterSortStyle>
      <FilterStyle>

        <FilterItemStyle title="sort by">
          <Dropdown
            options={sortOptions}
            value={sort}
            onSelect={setSort}
            width={200}
          />
        </FilterItemStyle>

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

        <SearchFilterItemStyle title="search for a tracked product">
          <InputBox
            type="text"
            icon={<BiSearch />}
            placeholder="search"
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            width={200}
            height={25}
            shadow
          />
        </SearchFilterItemStyle>

        {/* TODO - add disabled functionality */}
        <Button
          type="button"
          onClick={() => resetFilters()}
          title="reset search filters"
          shadow
        >
          reset filters
        </Button>

      </FilterStyle>

      <ShowingItemsStyle title="number of products displayed">
        showing {numProductsFiltered} of {numProducts}
      </ShowingItemsStyle>

    </FilterSortStyle>
  );
}

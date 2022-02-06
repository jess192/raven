import React from 'react';
import styled from 'styled-components';
import { GlobalThemeType} from '@/styles/theme';
import { SearchFilter, AvailabilityFilter, PriceFilter } from './components';

const FilterStyle = styled.div`
  border-right: 1px solid black;
  width: 20%;
 
  form {
    margin: 30px 0;
  }
`;

export function Filter() {
  return (
    <FilterStyle>
      <SearchFilter />
      <AvailabilityFilter />
      <PriceFilter />
    </FilterStyle>
  );
}

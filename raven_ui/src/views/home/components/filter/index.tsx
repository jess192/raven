import React from 'react';
import styled from 'styled-components';
import SearchFilter from './components/SearchFilter';
import AvailabilityFilter from './components/AvailabilityFilter';
import PriceFilter from './components/PriceFilter';

const FilterStyle = styled.div`
  border-right: 1px solid black;
  width: 20%;
 
  form {
    margin: 30px 0;
  }
`;

export default function Filter() {
  return (
    <FilterStyle>
      <SearchFilter />
      <AvailabilityFilter />
      <PriceFilter />
    </FilterStyle>
  );
}

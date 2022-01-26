import * as React from 'react';
import styled from 'styled-components';
import { FilterSearch } from './components';

const FilterStyle = styled.div`
  border-right: 1px solid black;
  width: 20%;
`;

export function Filter() {
  return (
    <FilterStyle>
      <FilterSearch />
    </FilterStyle>
  );
}

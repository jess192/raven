import React, { ChangeEvent } from 'react';
import { SearchStyle, SearchIconStyle, SearchInputStyle } from './style';
import { SearchBoxPropsType } from './types';

export default function SearchBox(props: SearchBoxPropsType) {
  const { type, placeholder, search, setSearch } = props;

  return (
    <SearchStyle>
      <SearchIconStyle />
      <SearchInputStyle
        type={type}
        placeholder={placeholder}
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
      />
    </SearchStyle>
  );
}

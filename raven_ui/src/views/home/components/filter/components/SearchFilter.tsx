import React, { useContext, useState } from 'react';
import { HomeContext } from '@/views/home/context';
import { HomeActionsEnum } from '@/views/home/types';

export default function SearchFilter() {
  const { dispatch } = useContext(HomeContext);
  const [search, setSearch] = useState('');

  const handleSearchInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val = event.target.value;
    setSearch(val);
    dispatch({ type: HomeActionsEnum.SET_SEARCH, value: val.toLowerCase().trim().split(' ') });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearchInputChange}
      />
    </form>
  );
}

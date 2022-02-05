import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions, FilterBy } from '@/types/enums';

export function SearchFilter() {
  const { dispatch } = useContext(GlobalContext);
  const [search, setSearch] = useState('');

  const handleSearchInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value;
    setSearch(() => (val));
    dispatch({ type: GlobalActions.SET_FILTER_BY, subType: FilterBy.SEARCH, value: val });
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

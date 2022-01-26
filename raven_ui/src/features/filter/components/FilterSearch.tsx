import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';

export function FilterSearch() {
  const { dispatch } = useContext(GlobalContext);
  const [search, setSearch] = useState('');

  const handleSearchInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value;
    setSearch(() => (val));
    dispatch({ type: 'FILTER_PRODUCT_LIST_BY_SEARCH', value: val });
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

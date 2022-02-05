import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions, FilterBy } from '@/types/enums';

export function PriceFilter() {
  const { state, dispatch } = useContext(GlobalContext);
  const regex: RegExp = /\d*[.]?\d?\d?/;

  const handleMinInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(regex).join();

    dispatch({
      type: GlobalActions.SET_FILTER_BY,
      subType: FilterBy.MIN_PRICE,
      value: Number(val),
    });
  };

  const handleMaxInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(regex).join();

    dispatch({
      type: GlobalActions.SET_FILTER_BY,
      subType: FilterBy.MAX_PRICE,
      value: Number(val),
    });
  };

  const minPrice: number = state.filter.price.min;
  const maxPrice: number = state.filter.price.max;

  return (
    <form>
      <input
        type="text"
        placeholder="Min"
        value={minPrice || ''}
        onChange={handleMinInputChange}
      />
      <input
        type="text"
        placeholder="Max"
        value={maxPrice || ''}
        onChange={handleMaxInputChange}
      />
    </form>
  );
}

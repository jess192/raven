import React, { useContext, useState } from 'react';
import { PRICE_FILTER_REGEX } from '@/utils/regex';
import { HomeContext } from '@/views/home/context';
import { HomeActionsEnum } from '@/views/home/types';

export default function PriceFilter() {
  const { state, dispatch } = useContext(HomeContext);

  const handleMinInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(PRICE_FILTER_REGEX).join();

    dispatch({
      type: HomeActionsEnum.SET_MIN_PRICE,
      value: Number(val),
    });
  };

  const handleMaxInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(PRICE_FILTER_REGEX).join();

    dispatch({
      type: HomeActionsEnum.SET_MAX_PRICE,
      value: Number(val),
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Min"
        value={state.minPrice || ''}
        onChange={handleMinInputChange}
      />
      <input
        type="text"
        placeholder="Max"
        value={state.maxPrice || ''}
        onChange={handleMaxInputChange}
      />
    </form>
  );
}

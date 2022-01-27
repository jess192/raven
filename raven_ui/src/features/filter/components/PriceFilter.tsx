import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';

export function PriceFilter() {
  const { dispatch } = useContext(GlobalContext);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const regex = /\d*[.]?\d?\d?/;

  const handleMinInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(regex).join();
    setMin(() => (val));

    dispatch({ type: 'FILTER_PRODUCT_LIST_BY_MIN_PRICE', value: Number(val) });
  };

  const handleMaxInputChange = (event: { persist: () => void; target: { value: string; }; }) => {
    event.persist();
    const val: string = event.target.value.match(regex).join();
    setMax(() => (val));

    dispatch({ type: 'FILTER_PRODUCT_LIST_BY_MAX_PRICE', value: Number(val) });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Min"
        value={min}
        onChange={handleMinInputChange}
      />
      <input
        type="text"
        placeholder="Max"
        value={max}
        onChange={handleMaxInputChange}
      />
    </form>
  );
}

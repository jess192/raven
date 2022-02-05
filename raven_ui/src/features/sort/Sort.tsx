import React, { useContext } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions, SortBy } from '@/types/enums';

export function Sort() {
  const { dispatch } = useContext(GlobalContext);

  const sortBy = (sortType: SortBy) => {
    dispatch({ type: GlobalActions.SET_SORT_BY, value: sortType });
  };

  return (
    <>
      <button type="button" onClick={() => sortBy(SortBy.RECENTLY_ADDED)}>
        Recently Added
      </button>
      <button type="button" onClick={() => sortBy(SortBy.NOT_RECENTLY_ADDED)}>
        Not Recently Added
      </button>
      <button type="button" onClick={() => sortBy(SortBy.LOW_TO_HIGH)}>
        Low to High
      </button>
      <button type="button" onClick={() => sortBy(SortBy.HIGH_TO_LOW)}>
        High to Low
      </button>
    </>
  );
}

import React, { useContext } from 'react';
import { HomeContext } from '@/views/home/context';
import { HomeActionsEnum, SortByEnum } from '@/views/home/types';

export default function Sort() {
  const { dispatch } = useContext(HomeContext);

  const sortBy = (sortType: SortByEnum) => {
    dispatch({ type: HomeActionsEnum.SET_SORT, value: sortType });
  };

  return (
    <>
      <button type="button" onClick={() => sortBy(SortByEnum.RECENTLY_ADDED)}>
        Recently Added
      </button>
      <button type="button" onClick={() => sortBy(SortByEnum.NOT_RECENTLY_ADDED)}>
        Not Recently Added
      </button>
      <button type="button" onClick={() => sortBy(SortByEnum.LOW_TO_HIGH)}>
        Low to High
      </button>
      <button type="button" onClick={() => sortBy(SortByEnum.HIGH_TO_LOW)}>
        High to Low
      </button>
    </>
  );
}

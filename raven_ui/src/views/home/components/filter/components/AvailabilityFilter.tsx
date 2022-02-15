import React, { useContext } from 'react';
import { HomeContext } from '@/views/home/context';
import { HomeActionsEnum } from '@/views/home/types';

export default function AvailabilityFilter() {
  const { dispatch } = useContext(HomeContext);

  const handleCheckboxChange = () => {
    dispatch({ type: HomeActionsEnum.SET_AVAILABILITY });
  };

  return (
    <form>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      Currently Available
    </form>
  );
}

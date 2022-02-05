import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { FilterBy, GlobalActions } from '@/types/enums';

export function AvailabilityFilter() {
  const { dispatch } = useContext(GlobalContext);

  const handleCheckboxChange = () => {
    dispatch({ type: GlobalActions.SET_FILTER_BY, subType: FilterBy.AVAILABILITY });
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

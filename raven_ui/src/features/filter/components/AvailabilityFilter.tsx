import React, { useContext, useState } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';

export function AvailabilityFilter() {
  const { dispatch } = useContext(GlobalContext);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    dispatch({ type: 'FILTER_PRODUCT_LIST_BY_AVAILABILITY', value: !checked });
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

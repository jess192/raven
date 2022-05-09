import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { GlobalContext } from '@/context';
import { GlobalActionsEnum } from '@/types';
import { IconButton } from '@/components/IconButton';

export default function ToggleTheme() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <IconButton
      title="Toggle Theme"
      onClick={() => dispatch({ type: GlobalActionsEnum.TOGGLE_THEME })}
    >
      {state.theme === 'LIGHT' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </IconButton>
  );
}

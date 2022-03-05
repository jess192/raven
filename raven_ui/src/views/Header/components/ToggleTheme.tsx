import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { GlobalContext } from '@/context';
import { GlobalActionsEnum } from '@/types';
import { ToggleThemeStyle } from './style';

export default function ToggleTheme() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <ToggleThemeStyle
      title="Toggle Theme"
      onClick={() => dispatch({ type: GlobalActionsEnum.TOGGLE_THEME })}
    >
      {state.theme === 'LIGHT' ? <MdOutlineDarkMode size="32" /> : <MdOutlineLightMode size="32" />}
    </ToggleThemeStyle>
  );
}

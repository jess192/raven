import React, { useContext } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions } from '@/types/enums';
import styled from 'styled-components';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export const ToggleThemeStyle = styled.div`
  cursor: pointer;
  padding: 5px 8px;
  
  &:hover {
    background: #F4BD54;
    color: #FFF;
    border-radius: 50%;
  }
`;

export default function ToggleTheme() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <ToggleThemeStyle onClick={() => dispatch({ type: GlobalActions.TOGGLE_THEME })}>
      {state.theme === 'LIGHT' ? <MdOutlineDarkMode size="32" /> : <MdOutlineLightMode size="32" />}
    </ToggleThemeStyle>
  );
}

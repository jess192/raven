import React, { useContext } from 'react';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions } from '@/types/enums';
import styled from 'styled-components';

export const ToggleThemeStyle = styled.button`
  cursor: pointer;
  width: 100px;
`;

export default function ToggleTheme() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <ToggleThemeStyle onClick={() => dispatch({ type: GlobalActions.TOGGLE_THEME })}>
      {state.theme}
    </ToggleThemeStyle>
  );
}

import * as React from 'react';
import styled from 'styled-components';
import ToggleTheme from './components/ToggleTheme';

export const HeaderStyle = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

export function Header() {
  return (
    <HeaderStyle>
      <h1>Raven</h1>
      <ToggleTheme />
    </HeaderStyle>
  );
}

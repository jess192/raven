import React from 'react';
import ToggleTheme from './components/ToggleTheme';
import { HeaderStyle } from './style';

export function Header() {
  return (
    <HeaderStyle>
      <h1>Raven</h1>
      <ToggleTheme />
    </HeaderStyle>
  );
}

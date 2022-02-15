import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from '@/context';
import { ComponentChildrenProps, ThemeModeEnum, LocalStorageEnum } from '@/types';
import { GlobalStyle, DarkTheme, LightTheme } from '@/styles/theme';
import { setLocalStorage } from '@/utils/localStorage';

export default function Theme({ children }: ComponentChildrenProps) {
  const { state } = useContext(GlobalContext);
  const thisTheme = state.theme === ThemeModeEnum.LIGHT ? LightTheme : DarkTheme;

  useEffect(() => {
    setLocalStorage(LocalStorageEnum.THEME, state.theme);
  }, [state.theme]);

  return (
    <ThemeProvider theme={thisTheme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
}

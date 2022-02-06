import React, { useContext, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalContext } from '@/providers/GlobalProvider';
import { GlobalActions, ThemeMode } from '@/types/enums';
import { GlobalThemeType, darkTheme, lightTheme } from '@/styles/theme';

type ThemeProps = {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle<GlobalThemeType>`
 body {
  font-size: 20px;
  color: ${(props: GlobalThemeType) => props.theme.textColor};
  background: ${(props: GlobalThemeType) => props.theme.bgColor};
 }
`;

function Theme({ children }: ThemeProps) {
  const { state, dispatch } = useContext(GlobalContext);
  const thisTheme = state.theme === ThemeMode.LIGHT ? lightTheme : darkTheme;

  useEffect(() => {
    if (localStorage.theme) {
      if (localStorage.getItem('theme') !== state.theme) {
        dispatch({ type: GlobalActions.TOGGLE_THEME });
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (state.theme !== ThemeMode.DARK) {
        dispatch({ type: GlobalActions.TOGGLE_THEME });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return (
    <ThemeProvider theme={thisTheme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
}

export default Theme;

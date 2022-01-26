import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalContext } from '@/providers/GlobalProvider';

type GlobalStyleType = {
  theme: { mode: string }
}

type ThemeProps = {
  children: React.ReactNode
}

const GlobalStyle = createGlobalStyle<GlobalStyleType>`
 body {
  font-size: 20px;
  background: ${(props) => (props.theme.mode === 'LIGHT' ? '#FFF' : '#8A8A8A')
}
`;

function Theme({ children }: ThemeProps) {
  const { state } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={{ mode: state.theme }}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
}

export default Theme;

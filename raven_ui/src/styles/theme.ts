import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

export type ThemeObjectType = {
  bgColor: string,
  textColor: string,
  linkColor: string,
  imageFilter: string
}

export const GlobalStyle = createGlobalStyle`
 body {
  font-size: 20px;
  color: ${(props: GlobalThemeType) => props.theme.textColor};
  background: ${(props: GlobalThemeType) => props.theme.bgColor};
 }
`;

export const DarkTheme: ThemeObjectType = {
  bgColor: '#141515',
  textColor: 'white',
  linkColor: '#61dafb',
  imageFilter: 'grayscale(50%) opacity(90%)',
};

export const LightTheme: ThemeObjectType = {
  bgColor: '#FFF',
  textColor: '#001c38',
  linkColor: '#5dd2f2',
  imageFilter: 'grayscale(0%) opacity(100%)',
};

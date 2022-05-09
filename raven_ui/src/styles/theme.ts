import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

type FontsType = {
  header: string,
  primary: string,
  secondary: string,
}

export type ThemeObjectType = {
  fonts: FontsType,
  bgColor: {
    primary: string,
    secondary: string,
  },
  color: {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    button: string,
  },
  codes: {
    error: string,
    warning: string,
    success: string,
    disabled: string,
  },
  border: {
    primary: string,
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-family: ${(props: GlobalThemeType) => props.theme.fonts.primary};
    color: ${(props: GlobalThemeType) => props.theme.color.secondary};
    background: ${(props: GlobalThemeType) => props.theme.bgColor.primary};
    margin: 5px 20px 20px 20px;
  }
`;

const shared = {
  fonts: {
    header: 'Caveat',
    primary: 'Nunito',
    secondary: 'Yanone Kaffeesatz',
  },
};

export const DarkTheme: ThemeObjectType = {
  fonts: shared.fonts,
  bgColor: {
    primary: '#1d1f1f',
    secondary: '#303030',
  },
  color: {
    primary: '#86a0a7',
    secondary: '#fff',
    tertiary: '#707070',
    quaternary: '#c0c0c0',
    button: '#565656',
  },
  codes: {
    error: '#cc6666',
    warning: '#f0c674',
    success: '#b5bd68',
    disabled: '#2f2f2f',
  },

  border: {
    primary: '#494848',
  },
};

export const LightTheme: ThemeObjectType = {
  fonts: shared.fonts,
  bgColor: {
    primary: '#f7f7f7',
    secondary: '#FFF',
  },
  color: {
    primary: '#55b2cb',
    secondary: '#001c38',
    tertiary: '#9f9f9f',
    quaternary: '#2d2d2d',
    button: '#f5fbfd',
  },
  codes: {
    error: '#c82829',
    warning: '#eab700',
    success: '#718c00',
    disabled: '#f5f5f5',
  },
  border: {
    primary: '#e7e7e7',
  },
};

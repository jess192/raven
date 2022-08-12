import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

type FontsType = {
  primary: string,
  secondary: string,
  tertiary: string,
}

export type ThemeObjectType = {
  fonts: FontsType,
  bgColor: {
    primary: string,
    secondary: string,
    tertiary: string,
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
    secondary: string,
  },
  image: {
    filter: string
  },
  shadow: {
    primary: string
  },
  gradient: {
    primary: string
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-family: ${(props: GlobalThemeType) => props.theme.fonts.secondary};
    color: ${(props: GlobalThemeType) => props.theme.color.secondary};
    background: ${(props: GlobalThemeType) => props.theme.bgColor.primary};
    margin: 0;
  }
`;

const shared = {
  fonts: {
    primary: 'Gentium Plus',
    secondary: 'Nunito',
    tertiary: 'Yanone Kaffeesatz',
  },
};

export const DarkTheme: ThemeObjectType = {
  fonts: shared.fonts,
  bgColor: {
    primary: '#2a2b30',
    secondary: '#3c3c3c',
    tertiary: '#28292e',
  },
  color: {
    primary: '#a5c7d0',
    secondary: '#ffffff',
    tertiary: '#707070',
    quaternary: '#c0c0c0',
    button: '#565656',
  },
  codes: {
    error: '#cc6666',
    warning: '#fdb936',
    success: '#8fbd68',
    disabled: '#2f2f2f',
  },

  border: {
    primary: '#4c4c4c',
    secondary: '#393838',
  },
  image: {
    filter: 'brightness(85%)',
  },
  shadow: {
    primary: '4px 4px 7px #161616',
  },
  gradient: {
    primary: 'linear-gradient(to bottom right, #6cb3bb 20%, #bfa2f2 70%)',
  },
};

export const LightTheme: ThemeObjectType = {
  fonts: shared.fonts,
  bgColor: {
    primary: '#f1efef',
    secondary: '#fff',
    tertiary: '#f1f1f1',
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
    warning: '#ffd43b',
    success: '#9fc114',
    disabled: '#f5f5f5',
  },
  border: {
    primary: '#e7e7e7',
    secondary: '#ddd',
  },
  image: {
    filter: 'none',
  },
  shadow: {
    primary: '4px 4px 7px #dddcdc',
  },
  gradient: {
    primary: 'linear-gradient(to bottom right, #36cbdc 20%, #b89ceb 70%)',
  },
};

import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

export type ThemeObjectType = {
  bgColor: string,
  bgSecondaryColor: string,
  textColor: string,
  linkColor: string,
  primaryColor: string,
  secondaryColor: string,
  secondaryFont: string,
  successColor: string,
  errorColor: string,

  header: {
    toggleHoverColor: string,
    textHoverColor: string,
    borderBottomColor: string,
  },

  home: {
    bgColor: string,
  },

  productTile: {
    textColor: string,
    bgColor: string,
    borderColor: string,
    imageFilter: string,
    shadow: string,
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-family: 'Nunito';
    color: ${(props: GlobalThemeType) => props.theme.textColor};
    background: ${(props: GlobalThemeType) => props.theme.bgColor};
    margin: 0 20px;
  }
  /*::selection {
    background: ${(props: GlobalThemeType) => props.theme.primaryColor};
    color: #FFF;
  }*/
`;

const AllTheme = {
  secondaryFont: 'Yanone Kaffeesatz',
};

export const DarkTheme: ThemeObjectType = {
  bgColor: '#1d1f1f',
  bgSecondaryColor: '#242424',
  textColor: '#FFF',
  linkColor: '#61dafb',
  primaryColor: '#F4BD54',
  secondaryColor: '#707070',
  secondaryFont: AllTheme.secondaryFont,
  successColor: '#b5bd68',
  errorColor: '#cc6666',

  header: {
    toggleHoverColor: '#000',
    textHoverColor: '#000',
    borderBottomColor: '#2c2a2a',
  },

  home: {
    bgColor: '#494949',
  },

  productTile: {
    textColor: '#FFF',
    bgColor: '#000',
    borderColor: '#494848',
    imageFilter: 'grayscale(50%) opacity(90%)',
    shadow: 'drop-shadow(4px 4px 4px #272626)',
  },
};

export const LightTheme: ThemeObjectType = {
  bgColor: '#f7f7f7',
  bgSecondaryColor: '#FFF',
  textColor: '#001c38',
  linkColor: '#5dd2f2',
  primaryColor: '#F4BD54',
  secondaryColor: '#9f9f9f',
  secondaryFont: AllTheme.secondaryFont,
  successColor: '#718c00',
  errorColor: '#c82829',

  header: {
    toggleHoverColor: '#FFF',
    textHoverColor: '#000',
    borderBottomColor: '#e1e1e1',
  },

  home: {
    bgColor: '#f6f6f6',
  },

  productTile: {
    textColor: '#474747',
    bgColor: '#fff',
    borderColor: '#e7e7e7',
    imageFilter: 'grayscale(0%) opacity(100%)',
    shadow: 'drop-shadow(4px 4px 4px #c0c0c0)',
  },
};

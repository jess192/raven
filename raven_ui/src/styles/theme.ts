import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

export type ThemeObjectType = {
  bgColor: string,
  textColor: string,
  linkColor: string,
  primaryColor: string,
  secondaryColor: string,

  header: {
    toggleHoverColor: string,
    textHoverColor: string,
    borderBottomColor: string,
  },

  home: {
    bgColor: string,
  },

  productTile: {
    bgColor: string,
    imageFilter: string,
    shadow: string,
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 15px;
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

export const DarkTheme: ThemeObjectType = {
  bgColor: '#141515',
  textColor: '#FFF',
  linkColor: '#61dafb',
  primaryColor: '#F4BD54',
  secondaryColor: '#9f9f9f',

  header: {
    toggleHoverColor: '#000',
    textHoverColor: '#000',
    borderBottomColor: '#2c2a2a',
  },

  home: {
    bgColor: '#494949',
  },

  productTile: {
    bgColor: '#000',
    imageFilter: 'grayscale(50%) opacity(90%)',
    shadow: 'drop-shadow(4px 4px 4px #272626)',
  },
};

export const LightTheme: ThemeObjectType = {
  bgColor: '#FFF',
  textColor: '#001c38',
  linkColor: '#5dd2f2',
  primaryColor: '#F4BD54',
  secondaryColor: '#9f9f9f',

  header: {
    toggleHoverColor: '#FFF',
    textHoverColor: '#000',
    borderBottomColor: '#e1e1e1',
  },

  home: {
    bgColor: '#f6f6f6',
  },

  productTile: {
    bgColor: '#fff',
    imageFilter: 'grayscale(0%) opacity(100%)',
    shadow: 'drop-shadow(4px 4px 4px #c0c0c0)',
  },
};

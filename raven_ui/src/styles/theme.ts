import { createGlobalStyle } from 'styled-components';

export type GlobalThemeType = {
  theme: ThemeObjectType
}

export type ThemeObjectType = {
  bgColor: string,
  textColor: string,
  linkColor: string,

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
`;

export const DarkTheme: ThemeObjectType = {
  bgColor: '#141515',
  textColor: 'white',
  linkColor: '#61dafb',

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

  home: {
    bgColor: '#f6f6f6',
  },

  productTile: {
    bgColor: '#fff',
    imageFilter: 'grayscale(0%) opacity(100%)',
    shadow: 'drop-shadow(4px 4px 4px #c0c0c0)',
  },
};

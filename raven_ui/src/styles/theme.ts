export type GlobalThemeType = {
  theme: {
    bgColor: string,
    textColor: string,
    linkColor: string,
    imageFilter: string
  }
}

export const darkTheme = {
  bgColor: '#141515',
  textColor: 'white',
  linkColor: '#61dafb',
  imageFilter: 'grayscale(50%) opacity(90%)',
};

export const lightTheme = {
  bgColor: '#FFF',
  textColor: '#001c38',
  linkColor: '#5dd2f2',
  imageFilter: 'grayscale(0%) opacity(100%)',
};

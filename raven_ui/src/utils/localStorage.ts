import { LocalStorageEnum, ThemeModeEnum } from '@/types';

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getInitialTheme = () => {
  const storageTheme: string = getLocalStorage(LocalStorageEnum.THEME);

  if (storageTheme) {
    return storageTheme === 'LIGHT' ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ThemeModeEnum.DARK;
  }
  return ThemeModeEnum.LIGHT;
};

import React from 'react';

export enum GlobalActionsEnum {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export enum ThemeModeEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export enum LocalStorageEnum {
  THEME = 'THEME'
}

export type ComponentChildrenProps = {
  children: React.ReactNode
}

export type GlobalStateType = {
  theme: ThemeModeEnum,
}

export type GlobalActionType = {
  type: GlobalActionsEnum,
  value?: any
}

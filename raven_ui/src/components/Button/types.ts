import React, { MouseEventHandler } from 'react';

export type ButtonPropsType = {
  children: React.ReactNode,
  _ref?: React.Ref<any>,
  type: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler,
  disabled?: boolean,
  width?: number,
  title?: string,
  shadow?: boolean
}

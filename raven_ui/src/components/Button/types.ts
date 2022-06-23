import React, { MouseEventHandler } from 'react';

export type ButtonPropsType = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler,
  disabled?: boolean,
  width?: number,
  title?: string,
}

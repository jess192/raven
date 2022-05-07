import React from 'react';

export type InputBoxPropsType = {
  type: string,
  icon?: JSX.Element,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  width?: number,
  height?: number,
  fontSize?: number
}

import React from 'react';

export type InputBoxPropsType = {
  type: string,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  width: number,
  height: number,
  fontSize: number
}

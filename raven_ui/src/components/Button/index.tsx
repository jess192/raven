import React from 'react';
import { ButtonPropsType } from './types';
import { ButtonStyle } from './style';

export default function Button(props: ButtonPropsType) {
  const { children, type, onClick, disabled } = props;

  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}

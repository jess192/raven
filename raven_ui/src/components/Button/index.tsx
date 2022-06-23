import React from 'react';
import { ButtonPropsType } from './types';
import { ButtonStyle } from './style';

export default function Button(props: ButtonPropsType) {
  const { children, type, onClick, disabled, width, title } = props;

  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled} width={width} title={title}>
      {children}
    </ButtonStyle>
  );
}

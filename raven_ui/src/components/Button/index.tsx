import React from 'react';
import { ButtonPropsType } from './types';
import { ButtonStyle } from './style';

export default function Button(props: ButtonPropsType) {
  const { children, _ref, type, onClick, disabled, width, title, shadow } = props;

  return (
    <ButtonStyle
      ref={_ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      width={width}
      title={title}
      shadow={shadow}
    >
      {children}
    </ButtonStyle>
  );
}

import React from 'react';
import { InputWrapperStyle, InputStyle, IconWrapperStyle } from './style';
import { InputBoxPropsType } from './types';

export default function InputBox(props: InputBoxPropsType) {
  const { type, icon, placeholder, value, onChange, width,
    height, fontSize, title, shadow } = props;

  return (
    <InputWrapperStyle
      width={width}
      height={height}
      fontSize={fontSize}
      title={title}
      shadow={shadow}
    >
      {icon ? <IconWrapperStyle>{icon}</IconWrapperStyle> : ''}
      <InputStyle
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapperStyle>
  );
}

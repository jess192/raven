import React, { ChangeEvent } from 'react';
import { InputWrapperStyle, InputStyle } from './style';
import { InputBoxPropsType } from './types';

export default function InputBox(props: InputBoxPropsType) {
  const { type, placeholder, value, onChange, width, height, fontSize } = props;

  return (
    <InputWrapperStyle width={width} height={height} fontSize={fontSize}>
      <InputStyle
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapperStyle>
  );
}

import React from 'react';
import { ThrobberPropsType } from './types';
import { ThrobberStyle } from './style';

export default function Throbber(props: ThrobberPropsType) {
  const { squareSize, thickness } = props;

  return (
    <ThrobberStyle
      $squareSize={squareSize}
      $thickness={thickness}
    />
  );
}

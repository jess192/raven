import React from 'react';

export type FlipCardPropsType = {
  children: React.ReactNode[],
  flip: boolean,
  setFlip: Function,
  speedMs: number
}

export enum FlipCardEnum {
  FRONT_CARD = 0,
  BACK_CARD = 1
}

import React from 'react';

export type ExpandCardPropsType = {
  children: React.ReactNode[],
  expand: boolean,
  setExpand: Function,
  speedMs: number,
  startWidth: number,
  endWidth: number
}

export enum ExpandCardEnum {
  FRONT_CARD = 0,
  BACK_CARD = 1
}

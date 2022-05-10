import styled from 'styled-components';
import { toMs } from '@/utils/formatting';
import { device } from '@/styles/responsive';

type FlipCardStylePropsType = {
  flipped: boolean,
  speedMs: number
}

export const FlipCardStyle = styled.div<FlipCardStylePropsType>`
  position: relative;
  transform: ${(props: FlipCardStylePropsType) => (props.flipped ? 'rotateY(-180deg)' : '')};
  transition-duration: ${(props: FlipCardStylePropsType) => toMs(props.speedMs)};
  transition-timing-function: ease-in-out;
  transform-style: preserve-3d;

  @media screen and ${device.sizeXS} {
    width: 100%;
  }
`;

export const FrontCardStyle = styled.div`
  backface-visibility: hidden;
  transform: rotateX(0deg);
`;

export const BackCardStyle = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
`;

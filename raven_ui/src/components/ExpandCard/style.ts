import styled from 'styled-components';
import { toPixels, toMs } from '@/utils/formatting';
import { device } from '@/styles/responsive';

type ExpandCardStylePropsType = {
  expanded: boolean,
  speedMs: number,
  startWidth: number,
  endWidth: number
}

type ExpandCardViewStylePropsType = {
  show: boolean
}

export const ExpandCardStyle = styled.div<ExpandCardStylePropsType>`
  width: ${(props: ExpandCardStylePropsType) => (props.expanded ? toPixels(props.endWidth) : toPixels(props.startWidth))};
  transition-timing-function: ease-in-out;
  transition-duration: ${(props: ExpandCardStylePropsType) => toMs(props.speedMs)};

  @media screen and ${device.sizeXS} {
    width: 100%
  }
`;

export const ExpandCardViewStyle = styled.div<ExpandCardViewStylePropsType>`
  width: 100%;
  height: 100%;
  display: ${(props:ExpandCardViewStylePropsType) => (props.show ? 'none' : 'block')};
`;

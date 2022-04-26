import styled from 'styled-components';
import { toPixels, toMs } from '@/utils/formatting';

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
  // TODO - this info should be defined on the component, like flipCard
  border: 1px solid #bebebe;
  margin: 0 38px 28px 0;
  padding: 10px;
  background-color: ${(props) => props.theme.bgSecondaryColor};
  
  width: ${(props: ExpandCardStylePropsType) => (props.expanded ? toPixels(props.endWidth) : toPixels(props.startWidth))};
  transition-timing-function: ease-in-out;
  transition-duration: ${(props: ExpandCardStylePropsType) => toMs(props.speedMs)};
`;

export const ExpandCardViewStyle = styled.div<ExpandCardViewStylePropsType>`
  width: 100%;
  height: 100%;
  display: ${(props:ExpandCardViewStylePropsType) => (props.show ? 'none' : 'block')};
`;

export const ExpandCardThrobberStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

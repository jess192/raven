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
  margin: 0 20px 20px 0;
  padding: 10px;
  background-color: ${(props) => props.theme.bgSecondaryColor};
  height: 340px;
  border: 1px solid ${(props) => props.theme.productTile.borderColor};
  border-radius: 8px;

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

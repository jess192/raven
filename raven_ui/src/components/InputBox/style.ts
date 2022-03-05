import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';

export const InputWrapperStyle = styled.div<{ width: number, height: number, fontSize: number }>`
  border: 1px solid black;
  display: flex;
  padding: 3px;
  width: ${(props) => toPixels(props.width)};
  height: ${(props) => toPixels(props.height)};
  font-size: ${(props) => toPixels(props.fontSize)};
`;

export const InputStyle = styled.input`
  all: unset;
  width: 100%;
  margin-top: 1px;
`;

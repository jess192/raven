import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';

export const InputWrapperStyle = styled.div<{ width: number, height: number, fontSize: number }>`
  width: ${(props) => (props.width ? toPixels(props.width) : 'inherit')};
  height: ${(props) => (props.height ? toPixels(props.height) : 'inherit')};
  font-size: ${(props) => (props.fontSize ? toPixels(props.fontSize) : 'inherit')};

  border: 2px solid ${(props) => props.theme.color.tertiary};
  background-color: ${(props) => props.theme.bgColor.secondary};
  display: flex;
  padding: 3px;

  :focus-within, :hover {
    transition: .4s;
    border-color: ${(props) => props.theme.color.primary}
  }
`;

export const IconWrapperStyle = styled.div`
  margin-top: 2px;
  font-size: 20px;
  color: ${(props) => props.theme.color.tertiary}
`;

export const InputStyle = styled.input`
  all: unset;
  width: 100%;
  margin-top: 1px;
  margin-left: 5px;
`;

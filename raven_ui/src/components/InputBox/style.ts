import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';
import { device } from '@/styles/responsive';

export const InputWrapperStyle = styled.div<{ width: number, height: number, fontSize: number, shadow: boolean }>`
  width: ${(props) => (props.width ? toPixels(props.width) : 'inherit')};
  height: ${(props) => (props.height ? toPixels(props.height) : 'inherit')};
  font-size: ${(props) => (props.fontSize ? toPixels(props.fontSize) : 'inherit')};
  box-shadow: ${(props) => (props.shadow ? props.theme.shadow.primary : 'none')};
  
  border: 1px solid ${(props) => props.theme.color.tertiary};
  background-color: ${(props) => props.theme.bgColor.secondary};
  display: flex;
  padding: 3px;

  :focus-within, :hover {
    transition: .4s;
    border-color: ${(props) => props.theme.color.primary}
  }

  @media screen and ${device.sizeM} {
    width: 100%;
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
  margin-left: 5px;
`;

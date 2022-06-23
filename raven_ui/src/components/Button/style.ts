import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';

export const ButtonStyle = styled.button<{width: number}>`
  all: unset;
  cursor: default;
  padding: 6px 15px 7px 15px;
  transition: .4s;
  width: ${(props) => (props.width ? toPixels(props.width) : 'inherit')};
  border: 2px solid ${(props) => props.theme.color.tertiary};
  border-radius: 17px;
  background-color: ${(props) => props.theme.bgColor.secondary};

  :disabled {
    background-color: ${(props) => props.theme.codes.disabled};
    color: ${(props) => props.theme.color.tertiary};
  }
  
  :hover :not(:disabled) {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.button};
  }
`;

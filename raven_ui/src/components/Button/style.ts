import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';

export const ButtonStyle = styled.button<{$width: number, $shadow: boolean}>`
  all: unset;
  cursor: default;
  padding: 6px 15px 7px 15px;
  width: ${(props) => (props.$width ? toPixels(props.$width) : 'inherit')};
  box-shadow: ${(props) => (props.$shadow ? props.theme.shadow.primary : 'none')};
  border: 1px solid ${(props) => props.theme.color.tertiary};
  border-radius: 17px;
  background-color: ${(props) => props.theme.bgColor.secondary};

  &:disabled {
    background-color: ${(props) => props.theme.codes.disabled};
    color: ${(props) => props.theme.color.tertiary};
  }
  
  &:not(:disabled):hover, &:focus {
    cursor: pointer;
    border-color: ${(props) => props.theme.color.primary};
    transition: .4s;
  }
`;

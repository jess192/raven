import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { toPixels } from '@/utils/formatting';

type DropdownStyleProps = {
  width: number
}

export const DropdownMenuStyle = styled(DropdownMenu.Root)``;

export const DropdownTriggerStyle = styled(DropdownMenu.Trigger)<DropdownStyleProps>`
  all: unset;
  cursor: pointer;
  width: ${(props) => toPixels(props.width)};
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const DropdownTriggerTitleStyle = styled.div`
  padding: 10px;
`;

export const DropdownTriggerIconStyle = styled.div`
  display: flex;
  padding: 10px;
`;

export const DropdownContentStyle = styled(DropdownMenu.Content)<DropdownStyleProps>`
  width: ${(props) => toPixels(props.width)};
  background-color: #fff;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  cursor: pointer;
  
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    
    &[data-state=open] {
      &[data-side="top"] {
        animation-name: slideDownAndFade
      }
      &[data-side="right"] {
        animation-name: slideLeftAndFade
      }
      &[data-side="bottom"] {
        animation-name: slideUpAndFade
      }
      &[data-side="left"] {
        animation-name: slideRightAndFade
      }
    }
  }
`;

export const DropdownLabelStyle = styled(DropdownMenu.Label)`
  padding-left: 25px;
  font-size: 12px;
  line-height: 25px;
`;

export const DropdownItemStyle = styled(DropdownMenu.Item)`
  cursor: pointer;
  height: 28px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 10px;

  &:focus, &:hover {
    background-color: #ffd198;
    outline: none;
  }
`;

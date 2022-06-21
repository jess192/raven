import styled, { keyframes } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { toPixels } from '@/utils/formatting';

type DropdownStyleProps = {
  width: number
}

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(5px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
});

export const DropdownMenuStyle = styled(DropdownMenu.Root)``;

export const DropdownTriggerStyle = styled(DropdownMenu.Trigger)<DropdownStyleProps>`
  all: unset;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.color.tertiary};
  background-color: ${(props) => props.theme.bgColor.secondary};
  width: ${(props) => toPixels(props.width)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover, :focus {
    transition: .4s;
    border-color: ${(props) => props.theme.color.primary};
  }
`;

export const DropdownTriggerTitleStyle = styled.div`
  padding: 7px;
`;

export const DropdownTriggerIconStyle = styled.div`
  display: flex;
  padding: 7px;
`;

export const DropdownContentStyle = styled(DropdownMenu.Content)<DropdownStyleProps>`
  width: ${(props) => toPixels(props.width - 10)};
  background-color: ${(props) => props.theme.bgColor.secondary};
  border-left: 2px solid ${(props) => props.theme.color.tertiary};
  border-right: 2px solid ${(props) => props.theme.color.tertiary};
  border-bottom: 2px solid ${(props) => props.theme.color.tertiary};
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px;
  
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    
    &[data-state=open] {
      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade}
      }
    }
  }
`;

export const DropdownItemStyle = styled(DropdownMenu.Item)`
  cursor: pointer;
  height: 25px;
  padding: 4px 14px;
  display: flex;
  align-items: center;

  :focus, :hover {
    background-color: ${(props) => props.theme.color.primary}90;
    border-radius: 10px;
    outline: none;
  }
`;

export const DropDownMenuLabelStyle = styled(DropdownMenu.Label)`
  cursor: default;
  padding-left: 14px;
  padding-top: 3px;
  color: #858585;
`;

export const DropDownMenuSeparatorStyle = styled(DropdownMenu.Separator)`
  cursor: default;
  height: 1px;
  background-color: #d4e5ff;
  margin: 5px;
`;

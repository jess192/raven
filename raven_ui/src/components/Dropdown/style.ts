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
  border: 2px solid ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgSecondaryColor};
  width: ${(props) => toPixels(props.width)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover, :focus {
    transition: .4s;
    border-color: ${(props) => props.theme.primaryColor};
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
  width: ${(props) => toPixels(props.width)};
  background-color: ${(props) => props.theme.bgSecondaryColor};
  border-left: 2px solid ${(props) => props.theme.secondaryColor};
  border-right: 2px solid ${(props) => props.theme.secondaryColor};
  border-bottom: 1px solid ${(props) => props.theme.secondaryColor};
  cursor: pointer;
  
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

export const DropdownItemStyle = styled(DropdownMenu.Item)<{active: boolean}>`
  cursor: pointer;
  height: 25px;
  padding: 4px 7px;
  border-bottom: 1px solid ${(props) => props.theme.secondaryColor};
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? props.theme.primaryColor : 'none')};

  :focus, :hover {
    background-color: ${(props) => props.theme.primaryColor}90;
    outline: none;
  }
`;

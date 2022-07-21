import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

export const ToggleSwitchStyle = styled(Switch.Root)`
  all: unset;
  cursor: pointer;
  width: 48px;
  height: 28px;
  background-color: ${(props) => props.theme.bgColor.secondary};
  border: 2px solid ${(props) => props.theme.color.tertiary};
  position: relative;
  border-radius: 20px;

  :focus, :hover {
    transition: .4s;
    border-color: ${(props) => props.theme.color.primary};
  }
`;

export const ToggleSwitchThumbStyle = styled(Switch.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background-color: #bdbdbd;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(6px);
  will-change: transform;
  
  &[data-state='checked'] {
    transform: translateX(24px);
    background-color: ${(props) => props.theme.color.primary};
  }
`;

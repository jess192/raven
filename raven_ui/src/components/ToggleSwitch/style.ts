import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

export const ToggleSwitchStyle = styled(Switch.Root)`
  all: unset;
  cursor: pointer;
  width: 55px;
  height: 30px;
  background-color: ${(props) => props.theme.bgSecondaryColor};
  border: 2px solid ${(props) => props.theme.secondaryColor};
  position: relative;
  border-radius: 20px;

  :focus, :hover {
    transition: .4s;
    border-color: ${(props) => props.theme.primaryColor};
  }
`;

export const ToggleSwitchThumbStyle = styled(Switch.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #bdbdbd;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(6px);
  will-change: transform;
  
  &[data-state='checked'] {
    transform: translateX(24px);
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

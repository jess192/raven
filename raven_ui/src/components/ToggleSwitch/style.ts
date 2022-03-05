import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

export const ToggleSwitchStyle = styled(Switch.Root)`
  all: unset;
  cursor: pointer;
  width: 45px;
  height: 25px;
  background-color: #FFF;
  border: 1px solid #000;
  position: relative;
  border-radius: 20px;
  
  &:focus {
    border: 1px solid #543e3e;
  }
`;

export const ToggleSwitchThumbStyle = styled(Switch.Thumb)`
  display: block;
  width: 15px;
  height: 15px;
  background-color: #bdbdbd;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(6px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(24px);
    background-color: #5d968b;
  }
`;

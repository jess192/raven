import React from 'react';
import { ToggleSwitchStyle, ToggleSwitchThumbStyle } from './style';
import { ToggleSwitchPropsType } from './types';

export default function ToggleSwitch(props: ToggleSwitchPropsType) {
  const { toggle, setToggle } = props;

  return (
    <form>
      <ToggleSwitchStyle
        checked={toggle}
        onCheckedChange={() => setToggle()}
      >
        <ToggleSwitchThumbStyle />
      </ToggleSwitchStyle>
    </form>
  );
}

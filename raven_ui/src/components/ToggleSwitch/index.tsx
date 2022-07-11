import React from 'react';
import { ToggleSwitchStyle, ToggleSwitchThumbStyle } from './style';
import { ToggleSwitchPropsType } from './types';

export default function ToggleSwitch(props: ToggleSwitchPropsType) {
  const { label, toggle, setToggle } = props;

  return (
    <form>
      <ToggleSwitchStyle
        aria-label={label}
        checked={toggle}
        onCheckedChange={() => setToggle()}
      >
        <ToggleSwitchThumbStyle />
      </ToggleSwitchStyle>
    </form>
  );
}

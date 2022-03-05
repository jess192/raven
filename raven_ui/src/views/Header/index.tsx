import React from 'react';
import styled from 'styled-components';
import ToggleTheme from './components/ToggleTheme';
import {
  HeaderStyle,
  HeaderLeftStyle,
  HeaderCenterStyle,
  HeaderTitleStyle,
  HeaderRightStyle,
  HeaderSubtitleStyle,
  NavStyle,
  NavItemStyle,
} from './style';

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <HeaderLeftStyle />
        <HeaderCenterStyle>
          <HeaderTitleStyle>Raven</HeaderTitleStyle>
          <HeaderSubtitleStyle>some subtitle..</HeaderSubtitleStyle>
        </HeaderCenterStyle>
        <HeaderRightStyle>
          <ToggleTheme />
        </HeaderRightStyle>
      </HeaderStyle>

      <NavStyle>
        <NavItemStyle>Home</NavItemStyle>
        <NavItemStyle>About</NavItemStyle>
        <NavItemStyle>Github</NavItemStyle>
      </NavStyle>
    </>
  );
}

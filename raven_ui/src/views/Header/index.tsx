import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleTheme from './components/ToggleTheme';
import {
  HeaderStyle,
  HeaderLeftStyle,
  HeaderCenterStyle,
  HeaderTitleStyle,
  HeaderRightStyle,
  NavStyle,
  NavItemStyle,
  DotStyle,
} from './style';

export default function Header() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const nav = {
    home: '/',
    about: '/about',
  };

  return (
    <>
      <HeaderStyle>
        <HeaderLeftStyle />
        <HeaderCenterStyle>
          <HeaderTitleStyle>Raven<DotStyle>.</DotStyle></HeaderTitleStyle>
        </HeaderCenterStyle>
        <HeaderRightStyle>
          <ToggleTheme />
        </HeaderRightStyle>
      </HeaderStyle>

      <NavStyle>
        <NavItemStyle active={path === nav.home} onClick={() => navigate(nav.home)}>
          Home
        </NavItemStyle>
        <NavItemStyle active={path === nav.about} onClick={() => navigate(nav.about)}>
          About
        </NavItemStyle>
        <NavItemStyle as="a" href="https://github.com/jess192" target="_blank">
          Github
        </NavItemStyle>
      </NavStyle>
    </>
  );
}

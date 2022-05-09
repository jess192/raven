import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { RiGithubLine } from 'react-icons/ri';
import { IconButton } from '@/components/IconButton';
import ToggleTheme from './components/ToggleTheme';
import {
  HeaderStyle, HeaderLeftStyle, HeaderCenterStyle, HeaderTitleStyle, HeaderRightStyle,
} from './style';

export default function Header() {
  const navigate = useNavigate();

  const nav = {
    home: '/',
    about: '/about',
  };

  return (
    <HeaderStyle>
      <HeaderLeftStyle />

      <HeaderCenterStyle>
        <HeaderTitleStyle onClick={() => navigate(nav.home)}>Raven</HeaderTitleStyle>
      </HeaderCenterStyle>

      <HeaderRightStyle>

        <IconButton title="About" onClick={() => navigate(nav.about)}>
          <BsInfo />
        </IconButton>

        <IconButton title="Github" as="a" href="https://github.com/jess192" target="_blank">
          <RiGithubLine />
        </IconButton>

        <ToggleTheme />

      </HeaderRightStyle>
    </HeaderStyle>
  );
}

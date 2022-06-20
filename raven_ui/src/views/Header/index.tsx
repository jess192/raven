import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { RiGithubLine } from 'react-icons/ri';
import { IconButton } from '@/components/IconButton';
import { CgMenu } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import ToggleTheme from './components/ToggleTheme';
import {
  HeaderStyle, HeaderLeftStyle, HeaderCenterStyle, HeaderTitleStyle,
  HeaderRightStyle, BigMenuStyle, SmallMenuStyle, SmallMenuSlidedownStyle, HeaderSubtitleStyle,
} from './style';

export default function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const nav = {
    home: '/',
    about: '/about',
  };

  const navIcons: JSX.Element = (
    <>
      <IconButton title="About" onClick={() => navigate(nav.about)}>
        <BsInfo />
      </IconButton>

      <IconButton title="Github" as="a" href="https://github.com/jess192" target="_blank">
        <RiGithubLine />
      </IconButton>

      <ToggleTheme />
    </>
  );

  return (
    <>
      <HeaderStyle>
        <HeaderLeftStyle />

        <HeaderCenterStyle>
          <HeaderTitleStyle onClick={() => navigate(nav.home)}>Raven</HeaderTitleStyle>
          <HeaderSubtitleStyle>product price tracker</HeaderSubtitleStyle>
        </HeaderCenterStyle>

        <HeaderRightStyle>

          <BigMenuStyle>
            {navIcons}
          </BigMenuStyle>

          <SmallMenuStyle>
            {/* TODO - also close with useClickOutside hook */}
            <IconButton title="Show Menu" onClick={() => setMenu(!menu)}>
              {menu ? <VscClose /> : <CgMenu />}
            </IconButton>
          </SmallMenuStyle>

        </HeaderRightStyle>
      </HeaderStyle>

      <SmallMenuSlidedownStyle show={menu}>
        {navIcons}
      </SmallMenuSlidedownStyle>
    </>
  );
}

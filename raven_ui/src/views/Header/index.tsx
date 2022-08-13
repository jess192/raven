import React, { useState } from 'react';
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
  const [menu, setMenu] = useState(false);

  const navIcons: JSX.Element = (
    <>
      <IconButton title="github" as="a" href="https://github.com/jess192" target="_blank">
        <RiGithubLine />
      </IconButton>

      <ToggleTheme />
    </>
  );

  return (
    <>
      <HeaderStyle>
        <HeaderLeftStyle />

        <HeaderCenterStyle title="raven - product price tracker">
          <HeaderTitleStyle>raven</HeaderTitleStyle>
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

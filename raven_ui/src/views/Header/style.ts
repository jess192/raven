import styled, { css } from 'styled-components';
import { GlobalThemeType } from '@/styles/theme';

type NavItemStyleProps = {
  active?: boolean
}

export const HeaderStyle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.header.borderBottomColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

export const HeaderLeftStyle = styled.div`
  flex: 1;
`;

export const HeaderCenterStyle = styled.div`
  flex: 3;
  text-align: center;
`;

export const HeaderTitleStyle = styled.div`
  font-family: 'Shadows Into Light';
  font-size: 70px;
  cursor: default;
`;

export const DotStyle = styled.span`
  color: ${(props: GlobalThemeType) => props.theme.primaryColor} 
`;

export const HeaderRightStyle = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: end;
`;

export const NavStyle = styled.div`
  font-family: 'Bangers';
  font-size: 22px;
  letter-spacing: 1px;
  padding: 3px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props: GlobalThemeType) => props.theme.header.borderBottomColor};
  align-items: center;
`;

export const NavItemStyle = styled.button<NavItemStyleProps>`
  all: unset;
  cursor: pointer;
  padding: 10px 12px;
  

  ${(props) => props.active && css`
     text-decoration: underline ${props.theme.primaryColor} 4px;
  `}
  
  :hover, :focus {
    ${(props) => (!props.active ? css`
      transition: 0.4s;
      color: ${props.theme.header.textHoverColor};
      background-color: ${props.theme.primaryColor};
    ` : css`
      cursor: default;
    `)}
  }
`;

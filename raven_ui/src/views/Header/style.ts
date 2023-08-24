import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftStyle = styled.span`
  flex: 1;
`;

export const HeaderCenterStyle = styled.hgroup`
  text-align: center;
  list-style: none;
`;

export const HeaderTitleStyle = styled.li`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 58px;
  margin-top: -10px;
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeaderSubtitleStyle = styled.li`
  margin-top: -14px;
  padding-bottom: 10px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.quaternary};
`;

export const HeaderRightStyle = styled.section`
  flex: 1;
`;

export const BigMenuStyle = styled.nav`
  text-align: right;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-right: 20px;

  @media screen and ${device.sizeXS} {
    display: none;
  }
`;

export const SmallMenuStyle = styled.nav`
  display: none;
  @media screen and ${device.sizeXS} {
    display: flex;
    justify-content: end;
    margin-right: 20px;
  }
`;

export const SmallMenuSlidedownStyle = styled.aside<{$show: boolean}>`
  display: none;
  @media screen and ${device.sizeXS} {
    display: ${(props) => (props.$show ? 'flex' : 'none')};
  }
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  background-color: ${(props) => props.theme.bgColor.tertiary};
`;

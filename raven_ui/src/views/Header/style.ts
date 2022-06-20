import styled from 'styled-components';
import { device } from '@/styles/responsive';

export const HeaderStyle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  background-color: ${(props) => props.theme.bgColor.tertiary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeftStyle = styled.div`
  flex: 1;
`;

export const HeaderCenterStyle = styled.div`
  text-align: center;
`;

export const HeaderTitleStyle = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 58px;
  margin-top: -10px;
`;

export const HeaderSubtitleStyle = styled.div`
  margin-top: -14px;
  padding-bottom: 7px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.quaternary};
`;

export const HeaderRightStyle = styled.div`
  flex: 1;
`;

export const BigMenuStyle = styled.div`
  text-align: right;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-right: 20px;

  @media screen and ${device.sizeXS} {
    display: none;
  }
`;

export const SmallMenuStyle = styled.div`
  display: none;
  @media screen and ${device.sizeXS} {
    display: flex;
    justify-content: end;
    margin-right: 20px;
  }
`;

export const SmallMenuSlidedownStyle = styled.div<{show: boolean}>`
  display: none;
  @media screen and ${device.sizeXS} {
    display: ${(props) => (props.show ? 'flex' : 'none')};
  }
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  background-color: ${(props) => props.theme.bgColor.tertiary};
`;

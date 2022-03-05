import styled from 'styled-components';

export const HeaderStyle = styled.div`
  border-bottom: 1px solid #c0c0c0;
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
  font-size: 35px;
  font-style: italic;
`;

export const HeaderSubtitleStyle = styled.div`
  font-size: 12px;
`;

export const HeaderRightStyle = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: end;
`;

export const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c0c0c0;
  align-items: center;
  height: 50px;
  font-size: 17px;
`;

export const NavItemStyle = styled.div`
  margin: 0 10px;
`;

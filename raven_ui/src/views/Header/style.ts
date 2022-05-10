import styled from 'styled-components';

export const HeaderStyle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  background-color: ${(props) => props.theme.bgColor.secondary};
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
  font-family: ${(props) => props.theme.fonts.header};
  font-size: 50px;
  transition: .4s;
  
  :hover {
    color: ${(props) => props.theme.color.primary}
  }
`;

export const HeaderRightStyle = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-right: 20px;
`;

import styled from 'styled-components';

const linkColor: string = '#3D3D3D';
const lightBkg:string = '#F2F2F2';
const darkBkg:string = '#3B3B3B';

export const HeaderStyle = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

export const NavigationStyle = styled.nav`
  background: ${(props) => (props.theme.mode === 'LIGHT' ? lightBkg : darkBkg)};
  font-size: 30px;
  
  display: flex;
  flex-direction: row;
`;

export const NavItemStyle = styled.div<{active: boolean}>`
  background: ${(props) => (props.active ? '#EB9500' : '#CFCFCF')};
  margin: 10px;

  a {
    padding: 4px 30px;
    color: ${linkColor};
    text-decoration: None;
  }
  a:link {
    color: ${linkColor};
  }
  button {
    padding: 5px 10px;
    font-size: 30px;
    cursor: pointer;
    border: ${(props) => (props.active ? '2px solid #EB9500' : '2px solid #c0c0c0')};
  }
  &:hover {
    background: #CFDEA2;
  }
`;

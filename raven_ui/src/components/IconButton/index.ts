import styled from 'styled-components';

export const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.theme.color.quaternary};
  background-color: ${(props) => props.theme.bgColor.secondary};
  border: 2px solid ${(props) => props.theme.border.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 25px;
  width: 25px;
  font-size: 30px;

  &:hover {
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.bgColor.secondary};
    border-color: ${(props) => props.theme.color.primary};
  }
`;

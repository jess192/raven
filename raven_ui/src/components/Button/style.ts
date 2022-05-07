import styled from 'styled-components';

export const ButtonStyle = styled.button`
  all: unset;
  cursor: default;
  padding: 7px 18px;
  transition: .4s;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: 17px;
  background-color: ${(props) => props.theme.bgSecondaryColor};

  :disabled {
    background-color: #f5f5f5;
    color: ${(props) => props.theme.secondaryColor};
  }

  //:hover :not(:disabled), :focus :not(:disabled) {
  :hover :not(:disabled) {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.primaryColor};
    background-color: #f5fbfd;
  }
`;

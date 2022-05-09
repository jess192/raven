import styled from 'styled-components';

export const ButtonStyle = styled.button`
  all: unset;
  cursor: default;
  padding: 7px 18px;
  transition: .4s;
  border: 2px solid ${(props) => props.theme.color.tertiary};
  border-radius: 17px;
  background-color: ${(props) => props.theme.bgColor.secondary};

  :disabled {
    background-color: ${(props) => props.theme.codes.disabled};
    color: ${(props) => props.theme.color.tertiary};
  }
  
  :hover :not(:disabled) {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.button};
  }
`;

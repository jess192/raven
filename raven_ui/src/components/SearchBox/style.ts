import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchStyle = styled.div`
  border: 2px solid ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgSecondaryColor};
  display: flex;
  padding: 3px;
  height: 25px;

  :focus-within, :hover {
    transition: .4s;
    border-color: ${(props) => props.theme.primaryColor}
  }
`;

export const SearchIconStyle = styled(BiSearch)`
  margin: 2px 5px 0 0;
  font-size: 20px;
  color: ${(props) => props.theme.secondaryColor}
`;

export const SearchInputStyle = styled.input`
  all: unset;
  width: 200px;
  margin-top: 1px;
`;

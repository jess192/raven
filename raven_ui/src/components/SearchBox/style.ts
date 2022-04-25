import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchStyle = styled.div`
  border: 2px solid ${(props) => props.theme.secondaryColor};
  display: flex;
  padding: 3px;
  height: 25px;
  font-size: 18px;

  :focus-within {
    border-color: ${(props) => props.theme.primaryColor}
  }
`;

export const SearchIconStyle = styled(BiSearch)`
  margin: -1px 5px 0 0;
  font-size: 27px;
  color: ${(props) => props.theme.secondaryColor}
`;

export const SearchInputStyle = styled.input`
  all: unset;
  width: 200px;
  margin-top: 1px;
`;

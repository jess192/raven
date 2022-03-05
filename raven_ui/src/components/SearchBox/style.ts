import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchStyle = styled.div`
  border: 1px solid black;
  display: flex;
  padding: 3px;
  height: 18px;
  font-size: 12px;
`;

export const SearchIconStyle = styled(BiSearch)`
  margin: -1px 5px 0 0;
  font-size: 20px;
`;

export const SearchInputStyle = styled.input`
  all: unset;
  width: 200px;
  margin-top: 1px;
`;

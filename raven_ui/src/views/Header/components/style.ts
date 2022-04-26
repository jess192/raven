import styled from 'styled-components';
import { GlobalThemeType } from '@/styles/theme';

export const ToggleThemeStyle = styled.button`
  all: unset;
  cursor: pointer;
  padding: 7px 8px 4px 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgSecondaryColor};

  :hover, :focus {
    color: ${(props: GlobalThemeType) => props.theme.header.toggleHoverColor};
    background: ${(props: GlobalThemeType) => props.theme.primaryColor};
  }
`;

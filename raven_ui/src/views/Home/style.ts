import styled from 'styled-components';

export const HomeViewStyle = styled.div`
  margin:20px;
`;

export const ProductsWrapperStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 14px;
`;

export const HomeThrobberWrapperStyle = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const HomeViewErrorStyle = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  
  svg {
    color: ${(props) => props.theme.color.primary}90;
    font-size: 200px;
    align-self: center;
  }
`;

export const HomeViewErrorTextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.quaternary};
  margin-top: 20px;
  font-size: 20px;
  align-self: center;
`;

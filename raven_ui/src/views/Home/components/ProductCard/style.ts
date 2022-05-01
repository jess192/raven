import styled, { css } from 'styled-components';

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 365px;
  width: 250px;
  border: 1px solid ${(props) => props.theme.productTile.borderColor};
  border-radius: 8px;
  margin: 0 20px 20px 0;
  padding: 10px;
  background-color: ${(props) => props.theme.bgSecondaryColor};
`;

export const ProductCardHeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.productTile.borderColor};
`;

export const ProductCardTimeStyle = styled.div`
  font-size: 20px;
`;

export const ProductCardHeadRightStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
`;

export const ProductCardDeleteButtonStyle = styled.button`
  all: unset;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const ProductCardImgStyle = styled.div`
  height: 200px;
  width: 200px;
  margin-top: 10px;
`;

export const ProductCardTitleStyle = styled.div`
  font-family: 'Yanone Kaffeesatz';
  font-size: 23px;
  color: #000;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 13px;
  height: 44px;
`;

export const ProductCardPriceWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  margin-top: 9px;
  border-top: 1px solid ${(props) => props.theme.productTile.borderColor};
`;

export const ProductCardPriceStyle = styled.div<{oos: boolean}>`
  color: ${(props) => props.theme.productTile.textColor};

  ${(props) => (props.oos ? css`
    font-size: 22px;
    color: #797979;
    font-style: italic;
  ` : css`
    display: flex;
    align-items: center;
    font-size: 28px;
  `)}
  
`;

export const ProductCardPercentStyle = styled.div<{change: number}>`
  align-self: center;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.change > 0 ? '#c28b63' : '#97c123')};
  background-color: ${(props) => (props.change > 0 ? '#ffe0af' : '#cae59b')};
  border-radius: 20px;
  padding: 6px;
  
  svg {
    margin-right: 4px;
    font-size: 15px;
  }
`;

export const ProviderLinkStyle = styled.a`
  all: unset;
  cursor: pointer;
  margin-right: 7px;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const ProductDeleteCardStyle = styled(ProductCardStyle)`
  justify-content: center;
`;

export const ProductDeleteLoadingStyle = styled.div<{isLoading: boolean}>`
  display: ${(props) => (props.isLoading ? 'block' : 'none')};
`;

export const ProductDeletePromptStyle = styled.div<{isLoading: boolean}>`
  display: ${(props) => (props.isLoading ? 'none' : 'block')};
`;

export const DeleteCardTextStyle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const DeleteCardButtonsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  > button {
    margin: 5px;
  }
`;

import styled from 'styled-components';

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 340px;
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
`;

export const ProductCardTimeStyle = styled.div`
  font-size: 20px;
`;

export const ProductCardHeadRightStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: #3d3d3d;
`;

export const ProductCardDeleteButtonStyle = styled.button`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const ProductCardImgStyle = styled.div`
  height: 200px;
  width: 200px;
  
  img {
    height: inherit;
    width: inherit;
    object-fit: contain;
  }
`;

export const ProductCardTitleStyle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 13px;
  height: 38px;
`;

export const ProductCardPriceWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  height: 20px;
`;

export const ProductCardPriceStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: ${(props) => props.theme.productTile.textColor};
`;

export const ProductCardPercentStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const ProviderLinkStyle = styled.a`
  all: unset;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};

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

import styled from 'styled-components';

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 332px;
  width: 250px;
  border: 1px solid #bebebe;
  margin: 0 38px 28px 0;
  padding: 10px;
  background-color: ${(props) => props.theme.bgSecondaryColor};
`;

export const ProductCardHeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductCardTimeStyle = styled.div`
  font-size: 28px;
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
  
  &:hover {
    color: #e5621e;
  }
`;

export const ProductCardImgStyle = styled.div`
  height: 180px;
  width: 180px;
  
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
  font-size: 15px;
  margin-top: 13px;
`;

export const ProductCardPriceWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 27px;
  margin-top: 8px;
  height: 50px;
`;

export const ProductCardPriceStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  color: ${(props) => props.theme.productTile.textColor};
`;

export const ProductCardPercentStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ProviderLinkStyle = styled.a`
  all: unset;
  cursor: pointer;

  margin-right: 7px;

  &:hover {
    color: #e5621e;
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

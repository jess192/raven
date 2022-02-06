import styled from 'styled-components';
import { GlobalThemeType } from '@/styles/theme';

export const ProductsGridStyle = styled.div`
  width: 100%;
  height: calc(100vh - 217px);
  overflow-y: auto;
  
  display: flex;
  flex-wrap: wrap;
  
  .throbber-container {
    margin: auto;
  }
`;

export const ProductTileStyle = styled.div`
  width: 400px;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  
  display: flex;
  flex-direction: column;
  
  .product-title {
    font-size: 12px;
  }
  
  img {
    height: 300px;
    max-width: 400px;
    margin: auto;
    border-radius: 10%;
    filter: ${(props: GlobalThemeType) => props.theme.imageFilter};
  }}
  }
  
  .product-price-container {
    margin: auto;
  }
`;

export const ProductDeleteButtonStyle = styled.div`
  align-self: end;
  cursor: pointer;
  padding: 5px 10px;
  
  &:hover {
    // color: #F4BD54;
    // background: #CDCDCD;
    background: #F4BD54;
    color: #FFF;
    border-radius: 50%;
  }
`;

export const ProductPriceStyle = styled.div<{type: string}>`
  color: #000;
  width: 200px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 4px 20px;
  margin: 7px 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  
  background: ${(props) => {
    if (props.type === 'current') {
      return '#fff';
    }
    if (props.type === 'low') {
      return '#e3faee';
    }
    if (props.type === 'high') {
      return '#ffecec;';
    }
    return '#fff';
  }};
`;

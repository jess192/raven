import styled from 'styled-components';

export const ProductsGridStyle = styled.div`
  width: 100%;
  height: calc(100vh - 162px);
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
  }
  
  .product-price-container {
    margin: auto;
  }
`;

export const ProductDeleteButtonStyle = styled.button`
  width: 50px;
  align-self: end;
  pointer: cursor;
`;

export const ProductPriceStyle = styled.div<{type: string}>`
  width: 150px;
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

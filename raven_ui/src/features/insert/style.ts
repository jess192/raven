import styled from 'styled-components';

export const InsertProductStyle = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  
  #insert-form-container {
    margin-top: 10px;
    
    #insert-product-status {
      font-size: 10px;
      width: 86%;
      margin: auto;
    }
  }
  
  form {
    height: inherit;
    display: flex;
    justify-content: center;
    
  input {
    width: 80%;
    font-size: 30px;
    border: none;
    border-bottom: 1px solid black;
    
    &:focus{
      outline: none;
    }
  }
`;

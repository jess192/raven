import styled from 'styled-components';

export const InsertCardFrontStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #c0c0c0;
    cursor: pointer;
  }
`;

export const InsertCardFrontImgStyle = styled.div`
  all: unset;
  font-size: 40px;
`;

export const InsertCardFrontTextStyle = styled.div`
  font-size: 20px;
`;

export const InsertCardBackStyle = styled.div`
  width: 100%;
  height: 100%;
`;

export const InsertCardBackStatusStyle = styled(InsertCardBackStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InsertCardBackFormStyle = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InsertCardBackTextStyle = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const InsertCardBackButtonsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  > button {
    margin: 5px;
  }
`;

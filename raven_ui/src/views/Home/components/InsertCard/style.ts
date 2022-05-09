import styled from 'styled-components';

export const InsertCardFrontStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: .4s;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.tertiary};
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

export const InsertCardBackFormStyle = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const InsertCardBackTextStyle = styled.div`
  margin-top: 40px;
  margin-bottom: 6px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 27px;
`;

export const SubTextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 18px;
  color:  ${(props) => props.theme.color.tertiary};
  margin-bottom: 30px;
`;

export const InsertCardBackLoadingStyle = styled(InsertCardBackStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InsertCardBackStatusStyle = styled.div<{type: string}>`
  color: ${(props): string => {
    switch (props.type) {
      case 'error':
        return props.theme.codes.error;
      case 'success':
        return props.theme.codes.success;
      default:
        return '';
    }
  }};
`;

export const InsertCardBackButtonsStyle = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 30px;
  gap: 10px;
`;

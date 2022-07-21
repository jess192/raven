import styled from 'styled-components';

const InsertCardStyle = styled.div`
  background-color: ${(props) => props.theme.bgColor.secondary};
  width: inherit;
  height: 362px;
  border: 1px solid ${(props) => props.theme.border.primary};
  border-radius: 8px;
`;

export const InsertCardFrontStyle = styled(InsertCardStyle)`
  color: ${(props) => props.theme.color.quaternary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: .4s;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const InsertCardFrontImgStyle = styled.div`
  all: unset;
  font-size: 40px;
`;

export const InsertCardFrontTextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-size: 26px;
`;

export const InsertCardBackStyle = styled(InsertCardStyle)`
`;

export const InsertCardBackFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const InsertCardBackTextStyle = styled.div`
  margin-top: 35px;
  margin-bottom: 6px;
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-size: 26px;
  color: ${(props) => props.theme.color.primary};
`;

export const SubTextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.tertiary};
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

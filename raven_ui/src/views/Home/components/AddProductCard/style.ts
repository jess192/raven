import styled from 'styled-components';

export const AddProductCardStyle = styled.section`
  background-color: ${(props) => props.theme.bgColor.secondary};
  border: 1px solid ${(props) => props.theme.border.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};
  width: 518px;
  height: 362px;
  border-radius: 8px;
`;

export const AddProductCardFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const AddProductCardTextStyle = styled.div`
  margin-top: 30px;
  margin-bottom: 6px;
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-size: 26px;
  color: ${(props) => props.theme.color.quaternary};
`;

export const AddProductCardSubtextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-size: 18px;
  color:  ${(props) => props.theme.color.tertiary};
  margin-bottom: 30px;
`;

export const AddProductCardStatusStyle = styled.div<{$type: string}>`
  height: 20px;
  margin-top: 5px;
  color: ${(props): string => {
    switch (props.$type) {
      case 'error':
        return props.theme.codes.error;
      case 'success':
        return props.theme.codes.success;
      default:
        return '';
    }
  }};
`;

export const AddProductCardButtonWrapperStyle = styled.span`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const AddProductCardLoadingStyle = styled(AddProductCardStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

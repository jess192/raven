import styled, { css } from 'styled-components';
import { device } from '@/styles/responsive';

export const ProductCardStyle = styled.dl`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 342px;
  width: 230px;
  border: 1px solid ${(props) => props.theme.border.primary};
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => props.theme.bgColor.secondary};
  box-shadow: ${(props) => props.theme.shadow.primary};

  @media screen and ${device.sizeXS} {
    width: calc(100% - 20px);
  }
`;

export const ProductCardHeadStyle = styled.section`
  all: unset;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
`;

export const ProductCardTimeStyle = styled.time`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.color.quaternary};
  font-size: 17px;
`;

export const ProductCardHeadRightStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22px;
`;

export const ProductCardDeleteButtonStyle = styled.button`
  all: unset;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ProductCardImgStyle = styled.picture`
  height: 180px;
  width: 180px;
  margin-top: 10px;
`;

export const ProductCardTitleStyle = styled.dt`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.color.quaternary};
  font-size: 15px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 20px;
  height: 40px;
`;

export const ProductCardPriceWrapperStyle = styled.dd`
  all: unset;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  margin-top: 9px;
  border-top: 1px solid ${(props) => props.theme.border.primary};
`;

export const ProductCardPriceStyle = styled.data<{oos: boolean}>`
  font-size: 28px;
  color: ${(props) => props.theme.color.quaternary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;

  ${(props) => (props.oos ? css`
    font-size: 26px;
    justify-content: center;
    width: 100%;
  ` : css`
    align-items: center;
  `)}
`;

export const ProductCardPercentStyle = styled.div<{change: number}>`
  align-self: center;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.change > 0 ? props.theme.codes.warning : props.theme.codes.success)};
  background-color: ${(props) => (props.change > 0 ? props.theme.codes.warning.concat('90') : props.theme.codes.success.concat('90'))};
  border-radius: 20px;
  padding: 2px 9px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 18px;

  svg {
    margin-right: 4px;
    font-size: 15px;
  }
`;

export const ProviderLinkStyle = styled.a`
  all: unset;
  cursor: pointer;
  margin-right: 7px;

  :hover, :focus {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ProductDeleteCardStyle = styled(ProductCardStyle)`
  justify-content: center;
`;

export const ProductDeleteLoadingStyle = styled.div<{isLoading: boolean}>`
  display: ${(props) => (props.isLoading ? 'block' : 'none')};
`;

export const ProductDeletePromptStyle = styled.section<{isLoading: boolean}>`
  display: ${(props) => (props.isLoading ? 'none' : 'block')};
`;

export const DeleteCardHeadTextStyle = styled.div`
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
`;

export const DeleteCardTextStyle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  padding: 10px 30px;
`;

export const DeleteCardButtonsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  
  > button {
    margin: 5px;
  }
`;

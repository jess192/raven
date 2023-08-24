import styled from 'styled-components';
import { toPixels } from '@/utils/formatting';

type ThrobberStylePropsType = {
  $squareSize: number,
  $thickness: number
}

export const ThrobberStyle = styled.div<ThrobberStylePropsType>`
  border-width: ${(props: ThrobberStylePropsType) => toPixels(props.$thickness)};
  border-style: solid;
  border-color: ${(props) => props.theme.color.primary}10;
  border-top-color: ${(props) => props.theme.color.primary};
  border-radius: 50%;
  width: ${(props: ThrobberStylePropsType) => toPixels(props.$squareSize)};
  height: ${(props: ThrobberStylePropsType) => toPixels(props.$squareSize)};
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

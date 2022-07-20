import styled from 'styled-components';

export const ImagePlaceholderStyle = styled.div`
  width: inherit;
  height: inherit;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #92bcc5;
  border-radius: 10px;
`;

export const ImageStyle = styled.img`
  height: inherit;
  width: inherit;
  object-fit: contain;
  background-color: #FFF;
  padding: 3px;
  
  filter: ${(props) => props.theme.image.filter};
  border-radius: 16px;
`;

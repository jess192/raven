import styled from 'styled-components';
import * as Slider from '@radix-ui/react-slider';

export const SliderRootStyle = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
`;

export const SliderTrackStyle = styled(Slider.Track)`
  cursor: pointer;
  background-color: ${(props) => props.theme.color.tertiary};
  position: relative;
  flex-grow: 1;
  height: 6px;
`;

export const SliderRangeStyle = styled(Slider.Range)`
  position: absolute;
  background-color: #575757;
  border-radius: 9999px;
  height: 100%;
`;

export const SliderThumbStyle = styled(Slider.Thumb)`
  all: unset;
  display: block;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #0e0e0e;
  border-radius: 10px;
  transition: .4s;

  :hover {
    background-color: #f3f3f3;
  }

  :focus {
    box-shadow: ${(props) => props.theme.color.primary}95 0 0 0 5px;
  }
`;

export const ValueLabelStyle = styled.div`
  margin-top: -20px;
  display: flex;
  justify-content: center;
  font-size: 11px;
`;

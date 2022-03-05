import React from 'react';
import { PriceSliderPropsType } from '@/components/PriceSlider/types';
import {
  SliderRootStyle,
  SliderTrackStyle,
  SliderRangeStyle,
  SliderThumbStyle,
  ValueLabelStyle } from './style';

export default function PriceSlider(props: PriceSliderPropsType) {
  const { priceRange, price, setPrice } = props;
  const min:number = price.min || priceRange.min;
  const max:number = price.max || priceRange.max;

  const onChange = (value: [number, number]) => {
    setPrice(value);
  };

  return (
    <SliderRootStyle
      aria-label="Price Range"
      value={[min, max]}
      max={priceRange.max}
      step={0.5}
      minStepsBetweenThumbs={0.5}
      onValueChange={onChange}
    >
      <SliderTrackStyle>
        <SliderRangeStyle />
      </SliderTrackStyle>

      <SliderThumbStyle>
        <ValueLabelStyle>${min}</ValueLabelStyle>
      </SliderThumbStyle>

      <SliderThumbStyle>
        <ValueLabelStyle>${max}</ValueLabelStyle>
      </SliderThumbStyle>

    </SliderRootStyle>
  );
}

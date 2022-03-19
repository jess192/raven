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

  const defaultMin:number = 0;
  const defaultMax:number = 500;

  const min:number = price.min || priceRange.min || defaultMin;
  const max:number = price.max || priceRange.max || defaultMax;

  const onChange = (value: [number, number]) => {
    setPrice(value);
  };

  return (
    <SliderRootStyle
      aria-label="Price Range"
      value={[min, max]}
      min={Math.floor(priceRange.min) || defaultMin}
      max={Math.ceil(priceRange.max) || defaultMax}
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

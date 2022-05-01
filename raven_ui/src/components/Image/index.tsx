import React, { useState } from 'react';
import { GiRaven } from 'react-icons/gi';
import { ImageStyle, ImagePlaceholderStyle } from './style';
import { ImagePropsType } from './types';

export default function Image(props: ImagePropsType) {
  const { src, alt } = props;
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <ImagePlaceholderStyle>
        <GiRaven />
      </ImagePlaceholderStyle>
    );
  }

  return (
    <ImageStyle
      src={src}
      alt={alt}
      onError={(e) => { setIsError(true); }}
    />
  );
}

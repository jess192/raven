import React, { useState } from 'react';
import FlipCard from '@/components/FlipCard';
import { ProductCardPropsType } from './types';
import ProductCardFront from './ProductCardFront';
import ProductCardBack from './ProductCardBack';

export default function ProductCard(props: ProductCardPropsType) {
  const { img, productID, title, provider, providerURL, price,
    timestamp, percentChange, firstPrice, firstTimestamp } = props;
  const [flip, setFlip] = useState(false);

  return (
    <FlipCard flip={flip} setFlip={setFlip} speedMs={500}>
      <ProductCardFront
        img={img}
        productID={productID}
        title={title}
        provider={provider}
        providerURL={providerURL}
        price={price}
        timestamp={timestamp}
        percentChange={percentChange}
        firstPrice={firstPrice}
        firstTimestamp={firstTimestamp}
        setFlip={setFlip}
      />

      <ProductCardBack
        productID={productID}
        setFlip={setFlip}
      />
    </FlipCard>
  );
}

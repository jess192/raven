import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { formatPrice } from '@/utils/formatting';
import { useFromNow } from '@/hooks/useFromNow';
import ProviderLink from './ProviderLink';
import { ProductCardFrontPropsType, ProvidersEnum } from './types';
import {
  ProductCardStyle, ProductCardHeadStyle, ProductCardTimeStyle, ProductCardHeadRightStyle,
  ProductCardDeleteButtonStyle, ProductCardImgStyle, ProductCardTitleStyle,
  ProductCardPriceWrapperStyle, ProductCardPriceStyle, ProductCardPercentStyle,
} from './style';

export default function ProductCardFront(props: ProductCardFrontPropsType) {
  const { img, productID, title, provider, providerURL, price,
    timestamp, percentChange, firstPrice, firstTimestamp, setFlip } = props;
  const fromNow = useFromNow(firstTimestamp);

  const perChange = () => {
    if (percentChange === 0) return '';
    if (percentChange > 0) return (<><AiOutlineArrowUp /> {percentChange} %</>);
    return (<><AiOutlineArrowDown /> {percentChange} %</>);
  };

  return (
    <ProductCardStyle>
      <ProductCardHeadStyle>

        <ProductCardTimeStyle>
          {fromNow.value.toFixed().concat(fromNow.unit)}
        </ProductCardTimeStyle>

        <ProductCardHeadRightStyle>
          <ProviderLink
            provider={provider}
            url={providerURL}
          />

          <ProductCardDeleteButtonStyle
            type="button"
            onClick={() => { setFlip(true); }}
            title="Remove Product"
          >
            <BiTrash />
          </ProductCardDeleteButtonStyle>
        </ProductCardHeadRightStyle>

      </ProductCardHeadStyle>

      <ProductCardImgStyle>
        <img src={img} alt={title} />
      </ProductCardImgStyle>

      <ProductCardTitleStyle>
        {title}
      </ProductCardTitleStyle>

      <ProductCardPriceWrapperStyle>
        <ProductCardPriceStyle title={timestamp}>
          {formatPrice(price)}
        </ProductCardPriceStyle>

        <ProductCardPercentStyle title={formatPrice(firstPrice)}>
          {perChange()}
        </ProductCardPercentStyle>
      </ProductCardPriceWrapperStyle>

    </ProductCardStyle>
  );
}

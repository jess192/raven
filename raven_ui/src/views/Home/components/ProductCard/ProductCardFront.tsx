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
  const { img, productID, title, price, timestamp, percentageChange,
    firstPrice, firstTimestamp, setFlip } = props;
  const fromNow = useFromNow(firstTimestamp);

  const perChange = () => {
    if (percentageChange === 0) return '~';
    if (percentageChange > 0) return (<><AiOutlineArrowUp /> {percentageChange} %</>);
    return (<><AiOutlineArrowDown /> {percentageChange} %</>);
  };

  return (
    <ProductCardStyle>
      <ProductCardHeadStyle>

        <ProductCardTimeStyle>
          {fromNow.value.toFixed().concat(fromNow.unit)}
        </ProductCardTimeStyle>

        <ProductCardHeadRightStyle>
          <ProviderLink
            provider={ProvidersEnum.AMAZON} // TODO - have API return this
            url={'https://amazon.com/dp/'.concat(productID)} // TODO - have API return this
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

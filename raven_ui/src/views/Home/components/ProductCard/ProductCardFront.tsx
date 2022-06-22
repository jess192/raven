import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { formatDate, formatPrice } from '@/utils/formatting';
import { useFromNow } from '@/hooks/useFromNow';
import Image from '@/components/Image';
import ProviderLink from './ProviderLink';
import { ProductCardFrontPropsType } from './types';
import {
  ProductCardStyle, ProductCardHeadStyle, ProductCardTimeStyle, ProductCardHeadRightStyle,
  ProductCardDeleteButtonStyle, ProductCardImgStyle, ProductCardTitleStyle,
  ProductCardPriceWrapperStyle, ProductCardPriceStyle, ProductCardPercentStyle,
} from './style';

export default function ProductCardFront(props: ProductCardFrontPropsType) {
  const { img, productID, title, provider, providerURL, price,
    timestamp, percentChange, firstPrice, firstTimestamp, setFlip } = props;
  const fromNow = useFromNow(firstTimestamp);
  const fromNowString: string = fromNow.value.toString().concat(' ', fromNow.unit);
  const formattedPrice: string = formatPrice(price);

  const showPerChange = () => {
    if (percentChange === 0) return;

    let perChange: JSX.Element;
    if (percentChange > 0) {
      perChange = (<><AiOutlineArrowUp /> {percentChange} %</>);
    } else {
      perChange = (<><AiOutlineArrowDown /> {percentChange} %</>);
    }

    // eslint-disable-next-line consistent-return
    return (
      <ProductCardPercentStyle
        title={`Percent change: ${percentChange}%\nOriginal added price: ${formatPrice(firstPrice)}`}
        change={percentChange}
      >
        {perChange}
      </ProductCardPercentStyle>
    );
  };

  return (
    <ProductCardStyle>
      <ProductCardHeadStyle>

        <ProductCardTimeStyle
          title={`${fromNowString} passed since product was added on ${formatDate(firstTimestamp)}`}>
          {fromNowString}
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
            <VscClose />
          </ProductCardDeleteButtonStyle>
        </ProductCardHeadRightStyle>

      </ProductCardHeadStyle>

      <ProductCardImgStyle title={title}>
        <Image src={img} alt={title} />
      </ProductCardImgStyle>

      <ProductCardTitleStyle title={title}>
        {title}
      </ProductCardTitleStyle>

      <ProductCardPriceWrapperStyle>
        <ProductCardPriceStyle
          title={`Current price: ${formattedPrice}\nLast updated: ${formatDate(timestamp)}`}
          oos={formattedPrice === 'Out of Stock'}
        >
          {formattedPrice}
        </ProductCardPriceStyle>

        {showPerChange()}
      </ProductCardPriceWrapperStyle>

    </ProductCardStyle>
  );
}

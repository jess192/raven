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
      <ProductCardPercentStyle change={percentChange}>
        {perChange}
      </ProductCardPercentStyle>
    );
  };

  return (
    <ProductCardStyle>
      <ProductCardHeadStyle>

        <ProductCardTimeStyle title={`${fromNowString} since product was added on ${formatDate(firstTimestamp)}`}>
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
            title="remove product"
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

      <ProductCardPriceWrapperStyle
        title={`current:\t${formattedPrice}\t${formatDate(timestamp)}\noriginal:\t${formatPrice(firstPrice)}\t${formatDate(firstTimestamp)}\nchange:\t${percentChange}%`}
      >
        <ProductCardPriceStyle oos={formattedPrice === 'out of stock'}>
          {formattedPrice}
        </ProductCardPriceStyle>

        {showPerChange()}
      </ProductCardPriceWrapperStyle>

    </ProductCardStyle>
  );
}

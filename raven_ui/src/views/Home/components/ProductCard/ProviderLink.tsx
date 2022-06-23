import React from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { ProviderLinkPropsType, ProvidersEnum } from './types';
import { ProviderLinkStyle } from './style';

const getProviderDetails = (provider: ProvidersEnum) => {
  switch (provider) {
    case ProvidersEnum.AMAZON:
      return { title: 'goto amazon product page', icon: <AiFillAmazonCircle /> };
    default:
      return { title: 'goto product page', icon: <RiShoppingCartLine /> };
  }
};

export default function ProviderLink(props: ProviderLinkPropsType) {
  const { provider, url } = props;

  const { title, icon } = getProviderDetails(provider);

  return (
    <ProviderLinkStyle
      href={url}
      target="_blank"
      title={title}
    >
      {icon}
    </ProviderLinkStyle>
  );
}

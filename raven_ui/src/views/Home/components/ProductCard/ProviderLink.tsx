import React from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { ProviderLinkPropsType, ProvidersEnum } from './types';
import { ProviderLinkStyle } from './style';

const getProviderDetails = (provider: ProvidersEnum) => {
  switch (provider) {
    case ProvidersEnum.AMAZON:
      return { title: 'Goto Amazon Product Page', icon: <AiFillAmazonCircle /> };
    default:
      return { title: 'Goto Product Page', icon: <RiShoppingCartLine /> };
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

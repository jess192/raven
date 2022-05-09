import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { InsertCardFrontPropsType } from './types';
import { InsertCardFrontStyle, InsertCardFrontImgStyle, InsertCardFrontTextStyle } from './style';

export default function InsertCardFront(props: InsertCardFrontPropsType) {
  const { setExpand } = props;

  return (
    <InsertCardFrontStyle onClick={() => { setExpand(true); }}>
      <InsertCardFrontImgStyle>
        <RiShoppingCartLine />
      </InsertCardFrontImgStyle>

      <InsertCardFrontTextStyle>
        Add a Product
      </InsertCardFrontTextStyle>
    </InsertCardFrontStyle>
  );
}

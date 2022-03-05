import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { InsertCardFrontPropsType } from './types';
import { InsertCardFrontStyle, InsertCardFrontImgStyle, InsertCardFrontTextStyle } from './style';

export default function InsertCardFront(props: InsertCardFrontPropsType) {
  const { setExpand } = props;

  return (
    <InsertCardFrontStyle onClick={() => { setExpand(true); }}>
      <InsertCardFrontImgStyle>
        <IoAddCircleOutline />
      </InsertCardFrontImgStyle>

      <InsertCardFrontTextStyle>
        Insert a Product
      </InsertCardFrontTextStyle>
    </InsertCardFrontStyle>
  );
}

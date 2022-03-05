import React from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { FlipCardPropsType, FlipCardEnum } from './types';
import { FlipCardStyle, FrontCardStyle, BackCardStyle } from './style';

export default function FlipCard(props: FlipCardPropsType) {
  const { children, flip, setFlip, speedMs } = props;
  const { ref } = useClickOutside(() => setFlip(false));

  const getCard = (key: FlipCardEnum) => {
    if (children.length !== 2) {
      throw new Error('FlipCard requires exactly 2 children.');
    }
    return children[key];
  };

  return (
    <FlipCardStyle flipped={flip} ref={ref} speedMs={speedMs}>
      <FrontCardStyle>
        {getCard(FlipCardEnum.FRONT_CARD)}
      </FrontCardStyle>

      <BackCardStyle>
        {getCard(FlipCardEnum.BACK_CARD)}
      </BackCardStyle>
    </FlipCardStyle>
  );
}

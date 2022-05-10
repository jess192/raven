import React from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { ExpandCardPropsType, ExpandCardEnum } from './types';
import { ExpandCardStyle, ExpandCardViewStyle } from './style';

export default function ExpandCard(props: ExpandCardPropsType) {
  const { children, expand, setExpand, speedMs, startWidth, endWidth } = props;
  const { ref } = useClickOutside(() => setExpand(false));

  const getCard = (key: ExpandCardEnum) => {
    if (children.length !== 2) {
      throw new Error('ExpandCard requires exactly 2 children.');
    }
    return children[key];
  };

  return (
    <ExpandCardStyle
      ref={ref}
      expanded={expand}
      speedMs={speedMs}
      startWidth={startWidth}
      endWidth={endWidth}
    >
      <ExpandCardViewStyle show={expand}>
        {getCard(ExpandCardEnum.FRONT_CARD)}
      </ExpandCardViewStyle>

      <ExpandCardViewStyle show={!expand}>
        {getCard(ExpandCardEnum.BACK_CARD)}
      </ExpandCardViewStyle>
    </ExpandCardStyle>
  );
}

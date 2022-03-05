import React, { useEffect, useState } from 'react';
import Throbber from '@/components/Throbber';
import { useClickOutside } from '@/hooks/useClickOutside';
import { ExpandCardPropsType, ExpandCardEnum } from './types';
import { ExpandCardStyle, ExpandCardThrobberStyle, ExpandCardViewStyle } from './style';

export default function ExpandCard(props: ExpandCardPropsType) {
  const { children, expand, setExpand, speedMs, startWidth, endWidth } = props;
  const [transition, setTransition] = useState(true);
  const { ref } = useClickOutside(() => setExpand(false));

  useEffect(() => {
    if (expand) {
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
      }, speedMs);
    } else {
      setTransition(true);
    }
  }, [expand]);

  const getCard = (key: ExpandCardEnum) => {
    if (children.length !== 2) {
      throw new Error('ExpandCard requires exactly 2 children.');
    }
    return children[key];
  };

  const showThrobber = (
    <ExpandCardThrobberStyle>
      <Throbber
        squareSize={50}
        thickness={8}
      />
    </ExpandCardThrobberStyle>
  );

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
        {transition ? showThrobber : getCard(ExpandCardEnum.BACK_CARD)}
      </ExpandCardViewStyle>
    </ExpandCardStyle>
  );
}

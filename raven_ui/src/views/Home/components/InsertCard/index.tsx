import React, { useState } from 'react';
import ExpandCard from '@/components/ExpandCard';
import InsertCardFront from './InsertCardFront';
import InsertCardBack from './InsertCardBack';

export default function InsertCard() {
  const [expand, setExpand] = useState(false);

  return (
    <ExpandCard
      expand={expand}
      setExpand={setExpand}
      speedMs={500}
      startWidth={250}
      endWidth={560}
    >
      <InsertCardFront
        setExpand={setExpand}
      />
      <InsertCardBack
        setExpand={setExpand}
      />
    </ExpandCard>
  );
}

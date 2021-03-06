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
      speedMs={400}
      startWidth={250}
      endWidth={518}
    >
      <InsertCardFront
        setExpand={setExpand}
      />
      <InsertCardBack
        expand={expand}
        setExpand={setExpand}
      />
    </ExpandCard>
  );
}

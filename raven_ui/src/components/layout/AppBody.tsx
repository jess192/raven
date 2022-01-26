import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '@/features/home';
import Theme from './Theme';

export function AppBody() {
  return (
    <Theme>
      {/* Routes setup for future routing */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Theme>
  );
}

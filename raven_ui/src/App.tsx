import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '@/providers/GlobalProvider';
import { AppBody } from '@/components/layout';

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppBody />
      </BrowserRouter>
    </GlobalProvider>
  );
}

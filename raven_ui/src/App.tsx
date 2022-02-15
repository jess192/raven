import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalProvider from '@/context';
import Header from '@/views/header';
import Home from '@/views/home';
import Theme from './Theme';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <BrowserRouter>
        <Theme>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Theme>
      </BrowserRouter>
    </GlobalProvider>
  );
}

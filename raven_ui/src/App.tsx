import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalProvider from '@/context';
import Header from '@/views/Header';
import Home from '@/views/Home';
import About from '@/views/About';
import Theme from './Theme';

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Theme>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Theme>
      </BrowserRouter>
    </GlobalProvider>
  );
}

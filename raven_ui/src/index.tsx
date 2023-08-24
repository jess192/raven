import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Nunito', 'Gentium Plus', 'Yanone Kaffeesatz'],
  },
});

const root: Root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

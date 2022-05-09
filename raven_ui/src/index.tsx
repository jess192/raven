import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Nunito', 'Caveat', 'Yanone Kaffeesatz'],
  },
});

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import Main from './Main';
import './index.css';

ReactDOM.render(
  <CookiesProvider>
    <Main />
  </CookiesProvider>,
  document.getElementById('root'),
);

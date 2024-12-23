import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStylesProvider } from './context/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStylesProvider>
        <App />
      </GlobalStylesProvider>
    </BrowserRouter>
  </React.StrictMode>
);



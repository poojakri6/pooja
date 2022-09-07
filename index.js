import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NewsContextProvider } from './NewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>
);

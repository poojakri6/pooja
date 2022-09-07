import React from 'react';
import './app.css';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;

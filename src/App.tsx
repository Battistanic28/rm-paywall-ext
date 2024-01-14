import React from 'react';
import './App.css';
import { getCachedPage } from './api/helpers/getCachedPage';

function App() {

  const handleClick = async () => {
    const url = await getCachedPage('https://cooking.nytimes.com/recipes/1023687-roasted-honey-nut-squash-and-chickpeas-with-hot-honey');
    alert(`Redirecting to: ${url}`)
  }

  return (
    <button className="button" onClick={handleClick}>
      Get Cached Page
    </button>
  );
}

export default App;

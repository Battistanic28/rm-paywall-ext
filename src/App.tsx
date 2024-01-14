import React from 'react';
import './App.css';
import { getCachedPage } from './api/helpers/getCachedPage';

function App() {

  const handleClick = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
      var activeTab = tabs[0];
      alert('Redirecting to insecure page')
      const url = await getCachedPage(activeTab.url || '');
      window.open(url, '_blank');
    })
  }

  return (
    <button className="button" onClick={handleClick}>
      Get Cached Page
    </button>
  );
}

export default App;

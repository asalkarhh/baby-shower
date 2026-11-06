import React from 'react';
import ReactDOM from 'react-dom/client';

// Local, bundled Devanagari web fonts (OFL-1.1 licensed)
import '@fontsource/rozha-one/devanagari.css';
import '@fontsource/mukta/devanagari.css';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import Gameplay from './Gameplay';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Gameplay/>
  </React.StrictMode>
);

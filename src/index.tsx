import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './Player';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Player />
  </React.StrictMode>
);

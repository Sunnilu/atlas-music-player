// src/main.jsx or src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicPlayer from './components/MusicPlayer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MusicPlayer />
  </React.StrictMode>
);

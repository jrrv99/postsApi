import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@styles/reset.css';
import '@styles/variables.css';
import '@styles/colors.css';
import '@styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

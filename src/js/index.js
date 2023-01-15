import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../css/styles.css';

console.log('eee boi!');

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/odin-shopping-cart">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

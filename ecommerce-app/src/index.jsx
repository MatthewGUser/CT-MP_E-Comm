// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensure BrowserRouter is imported
import App from './App'; // Import the App component
import { ProductProvider } from './components/products/ProductContext'; // Import ProductProvider
import './index.css'; // Global CSS, optional

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ProductProvider> {/* Wrap the App component with ProductProvider */}
      <App />
    </ProductProvider>
  </BrowserRouter>
);

// src/App.js
import React from 'react';
import { CustomerProvider } from './components/customers/CustomerContext';
import { ProductProvider } from './components/products/ProductContext';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <CustomerProvider>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </CustomerProvider>
  );
};

export default App;

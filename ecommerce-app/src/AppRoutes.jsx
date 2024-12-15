// src/AppRoutes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateProductForm from './pages/CreateProductForm';
import EditProductForm from './pages/EditProductForm';
import CreateCustomerForm from './pages/CreateCustomerForm';
import EditCustomerForm from './pages/EditCustomerForm';
import Shop from './pages/Shop';
import { ProductProvider } from './components/products/ProductContext';
import { OrderProvider } from './components/orders/OrderContext'; // Import OrderProvider

const AppRoutes = () => (
  <ProductProvider>
    <OrderProvider> {/* Wrap routes that need access to OrderContext */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />
        <Route path="/create-customer" element={<CreateCustomerForm />} />
        <Route path="/edit-customer/:id" element={<EditCustomerForm />} />
        <Route path="/shop/:id" element={<Shop />} /> {/* Shop now has access to OrderContext */}
      </Routes>
    </OrderProvider>
  </ProductProvider>
);

export default AppRoutes;

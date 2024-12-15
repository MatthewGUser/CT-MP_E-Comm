// src/components/products/ProductContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const ProductContext = createContext();

// Helper function to load products from localStorage
const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem('products');
  return storedProducts ? JSON.parse(storedProducts) : [];
};

export const ProductProvider = ({ children }) => {
  // Load products from localStorage
  const [products, setProducts] = useState(loadProductsFromLocalStorage);

  // Function to create a new product
  const createProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Function to delete a product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Function to update a product
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, createProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the product context
export const useProducts = () => useContext(ProductContext);

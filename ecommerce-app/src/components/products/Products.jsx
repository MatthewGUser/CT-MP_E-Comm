// src/componnets/products/Products.jsx

import React, { useState } from 'react';
import ProductList from './ProductList'; // Import ProductList component
import Product from './Product'; // Import Product class

const Products = () => {
  const [products] = useState([
    new Product(1, 'Product 1', 29.99, 'Description for product 1'),
    new Product(2, 'Product 2', 49.99, 'Description for product 2'),
    new Product(3, 'Product 3', 19.99, 'Description for product 3'),
  ]);

  const handleAddToCart = (product) => {
    // Add product to the cart (for now, we just log it)
    console.log('Added to cart:', product);
  };

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} addToCart={handleAddToCart} />
    </div>
  );
};

export default Products;

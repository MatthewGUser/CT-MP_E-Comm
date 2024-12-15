// src/components/products/ProductList.jsx

import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

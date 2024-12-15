// src/pages/CreateProductForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../components/products/ProductContext';
import '../styles/Form.css'; // Import the form styles

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const { createProduct } = useProducts();  // Accessing createProduct function from context

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(), // You can use any unique id generation method
      name,
      price,
      details,
    };

    // Call the createProduct function
    createProduct(newProduct);

    // Redirecting to the home page after creating the product
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Product Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductForm;

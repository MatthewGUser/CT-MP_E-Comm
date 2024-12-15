// src/pages/EditProductForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../components/products/ProductContext';
import '../styles/Form.css'; // Import the form styles

const EditProductForm = () => {
  const { id } = useParams(); // Get product id from URL
  const { products, updateProduct } = useProducts(); // Access updateProduct from context
  const navigate = useNavigate();

  // Find the product by id
  const product = products.find((product) => product.id === parseInt(id));

  // Local state for the form fields
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [details, setDetails] = useState(product ? product.details : '');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated product object
    const updatedProduct = {
      id: product.id,
      name,
      price,
      details,
    };

    // Call the updateProduct function from context
    updateProduct(updatedProduct);

    // Redirect to the home page (or wherever you need to)
    navigate('/');
  };

  // Handle if the product is not found (optional)
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="form-container">
      <h2>Edit Product</h2>
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
        <button type="submit" className="form-button">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;

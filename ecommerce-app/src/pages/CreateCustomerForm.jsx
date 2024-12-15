// src/components/customers/CreateCustomerForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomers } from '../components/customers/CustomerContext';
import '../styles/Form.css'; // Import the form styles

const CreateCustomerForm = () => {
  const { createCustomer } = useCustomers();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Add phone state

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { id: Date.now(), name, email, phone }; // Add phone to customer data
    createCustomer(newCustomer);
    navigate('/'); // Redirect to Home page after creating customer
  };

  return (
    <div className="form-container">
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="tel"
          placeholder="Customer Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Create Customer</button>
      </form>
    </div>
  );
};

export default CreateCustomerForm;

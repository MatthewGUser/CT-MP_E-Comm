// src/pages/EditCustomerForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomers } from '../components/customers/CustomerContext';
import '../styles/Form.css'; // Import the form styles

const EditCustomerForm = () => {
  const { id } = useParams();
  const { customers, updateCustomer } = useCustomers();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const customerToEdit = customers.find((customer) => customer.id === parseInt(id));
    if (customerToEdit) {
      setName(customerToEdit.name);
      setEmail(customerToEdit.email);
      setPhone(customerToEdit.phone);
    }
  }, [id, customers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustomer = { id: parseInt(id), name, email, phone };
    updateCustomer(updatedCustomer);
    navigate('/'); // Navigate back to Home after updating
  };

  return (
    <div className="form-container">
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter customer name"
          required
          className="form-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter customer email"
          required
          className="form-input"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter customer phone"
          required
          className="form-input"
        />
        <button type="submit" className="form-button">Update Customer</button>
      </form>
    </div>
  );
};

export default EditCustomerForm;

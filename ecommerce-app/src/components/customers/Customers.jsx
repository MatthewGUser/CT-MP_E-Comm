// src/components/customers/Customers.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerList from './CustomerList'; // Import CustomerList component
import { useCustomers } from './CustomerContext';

const Customers = () => {
  const { customers, deleteCustomer } = useCustomers();
  const navigate = useNavigate();

  const handleContactCustomer = (customer) => {
    // Contact customer (for now, we just log it)
    console.log('Contacting customer:', customer);
  };

  const handleEditCustomer = (id) => {
    navigate(`/edit-customer/${id}`);
  };

  const handleDeleteCustomer = (id) => {
    deleteCustomer(id);
  };

  return (
    <div>
      <h1>Customers</h1>
      <CustomerList
        customers={customers}
        contactCustomer={handleContactCustomer}
        handleEdit={handleEditCustomer}
        handleDelete={handleDeleteCustomer}
      />
    </div>
  );
};

export default Customers;

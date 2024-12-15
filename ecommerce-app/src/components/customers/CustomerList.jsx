// src/components/customers/CustomerList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomers } from './CustomerContext';

const CustomerList = () => {
  const { customers, deleteCustomer } = useCustomers();

  return (
    <div className="list-container">
      <div className="list-header">Customer List</div>
      {customers.map((customer) => (
        <div key={customer.id} className="list-item">
          <div>{customer.name}</div>
          <div>{customer.email}</div>
          <div>{customer.cartId}</div> {/* Display cartId here */}
          <div className="list-item-actions">
            <Link to={`/edit-customer/${customer.id}`} className="list-button">Edit</Link>
            <button
              onClick={() => deleteCustomer(customer.id)}
              className="list-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;

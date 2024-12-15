// src/components/customers/CustomerContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';

const CustomerContext = createContext();

export const useCustomers = () => {
  return useContext(CustomerContext);
};

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const createCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  const updateCustomer = (updatedCustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  const deleteCustomer = (id) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, createCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

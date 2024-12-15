// src/components/orders/OrderContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const OrderContext = createContext();

// Create a custom hook to access the order context
export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

// Create a provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Store orders in localStorage whenever orders change
  React.useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

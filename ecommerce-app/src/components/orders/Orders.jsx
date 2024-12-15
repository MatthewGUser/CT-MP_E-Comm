import React, { useState, useEffect } from 'react';
import OrderList from './OrderList'; // Import OrderList component
import { useCustomers } from '../customers/CustomerContext'; // Use CustomerContext to get current customer

const Orders = () => {
  const { customers } = useCustomers(); // Get all customers from context
  const [userOrders, setUserOrders] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming userId is saved in localStorage during login

  const orders = [
    { id: 1, userId: 1, products: [{ name: 'Product 1', price: 29.99 }, { name: 'Product 2', price: 49.99 }], status: 'Pending' },
    { id: 2, userId: 2, products: [{ name: 'Product 3', price: 19.99 }], status: 'Shipped' },
    { id: 3, userId: 1, products: [{ name: 'Product 4', price: 15.99 }], status: 'Completed' },
  ];

  // Filter orders by the logged-in user
  useEffect(() => {
    if (userId) {
      const filteredOrders = orders.filter(order => order.userId === parseInt(userId));
      setUserOrders(filteredOrders);
    }
  }, [userId]);

  return (
    <div>
      <h1>User Orders</h1>
      <OrderList orders={userOrders} />
    </div>
  );
};

export default Orders;

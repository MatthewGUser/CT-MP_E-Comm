import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomers } from '../components/customers/CustomerContext';
import { useProducts } from '../components/products/ProductContext';
import '../styles/Home.css';  // Ensure Home styles are being applied
import '../styles/List.css';  // Ensure List styles are being applied

const Home = () => {
  const { customers, deleteCustomer } = useCustomers();
  const { products, deleteProduct } = useProducts();

  const navigate = useNavigate();

  const handleCreateCustomer = () => {
    navigate('/create-customer');
  };

  const handleCreateProduct = () => {
    navigate('/create-product');
  };

  const handleEditCustomer = (customer) => {
    navigate(`/edit-customer/${customer.id}`);
  };

  const handleEditProduct = (product) => {
    navigate(`/edit-product/${product.id}`);
  };

  // Handle Shop navigation for each customer
  const handleShop = (customerId) => {
    navigate(`/shop/${customerId}`);
  };

  return (
    <div className="home-container">
      <h1>Home</h1>

      <div className="list-section">
        <h2>Customers</h2>
        <button onClick={handleCreateCustomer}>Create New Customer</button>
        <div className="list-container">
          {customers.map((customer) => (
            <div key={customer.id} className="list-item">
              <div className="list-item-header">
                <div className="customer-name">{customer.name}</div>
                <div className="list-item-actions">
                  <button onClick={() => handleEditCustomer(customer)} className="list-button">Edit</button>
                  <button onClick={() => deleteCustomer(customer.id)} className="list-button">Delete</button>
                  <button onClick={() => handleShop(customer.id)} className="list-button">Shop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="list-section">
        <h2>Products</h2>
        <button onClick={handleCreateProduct}>Create New Product</button>
        <div className="list-container">
          {products.map((product) => (
            <div key={product.id} className="list-item">
              <div className="list-item-header">
                <div className="product-name">{product.name}</div>
                <div className="product-price">${product.price}</div>
              </div>
              {product.details && (
                <div className="product-description">{product.details}</div>
              )}
              <div className="list-item-actions">
                <button onClick={() => handleEditProduct(product)} className="list-button">Edit</button>
                <button onClick={() => deleteProduct(product.id)} className="list-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

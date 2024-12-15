import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../components/products/ProductContext';
import '../styles/Shop.css';
import '../styles/List.css';

const Shop = () => {
  const { products } = useProducts(); // Access products from context
  const [cart, setCart] = useState([]); // Manage the shopping cart state
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const { customerId } = useParams(); // Get the customer ID from the URL

  // Ensure the CartID is unique for each customer
  const CartLink = localStorage.getItem(`CartLink-${customerId}`); 
  const CartID = CartLink || `cart-${Math.random().toString(36).substring(7)}`;

  // Check if the cart exists for the given customerId and load it, or throw an error
  useEffect(() => {
    if (!CartLink) {
      // If CartLink does not exist for this customer, throw an error or handle accordingly
      throw new Error(`Cart for customer ${customerId} does not exist!`);
    }

    // Retrieve the customer's cart from localStorage using the CartID
    const savedCart = JSON.parse(localStorage.getItem(CartID));
    
    if (savedCart) {
      setCart(savedCart); // If a cart is found, set it to the state
    } else {
      console.error(`No cart found for customer ${customerId}`);
      setCart([]); // Optionally clear the cart state if none is found
    }
  }, [CartID, customerId]);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    if (CartID) {
      localStorage.setItem(CartID, JSON.stringify(cart));
    }
  }, [cart, CartID]);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Update the quantity if the product already exists in the cart
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the product to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Handle changing the quantity of a product in the cart
  const handleChangeQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent negative or zero quantity

    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Calculate total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout (mock order button)
  const handleOrder = () => {
    // Here, you could add logic for processing the order
    alert("Your order has been placed!");

    // Clear the cart after placing the order
    setCart([]);
    localStorage.removeItem(CartID); // Optionally, remove cart from localStorage
  };

  return (
    <div className="shop-page">
      {/* Back to Home Button */}
      <button onClick={() => navigate('/')} className="back-home-button">
        Back to Home
      </button>

      <div className="list-container">
        {/* Cart Section */}
        <div className="cart-section">
          <h3>Shopping Cart</h3>
          <div className="list-container">
            {cart.map((item) => (
              <div key={item.id} className="list-item">
                <div className="list-item-header">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-item-total">${item.price * item.quantity}</div>
                </div>
                <div className="list-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)} className="list-button">
                    Remove
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleChangeQuantity(item.id, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h4>Total:</h4>
            <span>${getTotalPrice()}</span>
          </div>

          {/* Order Button */}
          {cart.length > 0 && (
            <button onClick={handleOrder} className="order-button">
              Complete Purchase
            </button>
          )}
        </div>

        {/* Product List Section */}
        <h3>Product List</h3>
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
                {/* Add to Cart Button */}
                <button onClick={() => handleAddToCart(product)} className="list-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.length === 0 ? (
        <p>No orders found for this user.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-item">
            <h3>Order #{order.id}</h3>
            <ul>
              {order.products.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
            <p>Status: {order.status}</p>

            {/* Buttons */}
            <button className="form-button shop-button">Shop</button>
            <button className="form-button edit-button">Edit</button>
            <button className="form-button delete-button">Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;

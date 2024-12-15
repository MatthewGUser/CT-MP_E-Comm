// src/components/orders/Order.js
class Order {
  constructor(cartId, id, userId, products, status) {
    this.cartId = cartId;  // The unique cart ID
    this.id = id;           // The order ID
    this.userId = userId;   // The user associated with the order
    this.products = products; // List of products
    this.status = status;    // The order status (e.g., "Pending", "Shipped")
  }
}

export default Order;

// src/components/customers/Customer.js

class Customer {
  constructor(id, name, email, phone, cartId) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.cartId = cartId; // Added cartId to match UserID (Order list will match UserID)
  }
}

export default Customer;

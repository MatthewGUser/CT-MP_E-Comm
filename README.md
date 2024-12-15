# E-Commerce App

This is a React-based E-Commerce application. The app allows customers to browse products, add them to a shopping cart, and place orders. It utilizes context for managing customer, product, and order states.

## Overview
The E-Commerce App allows users to:
- Create and manage customer profiles
- Browse products and add them to a cart
- View and manage their cart
- Place orders
- Manage products and customer information

The app uses React Context API for state management and localStorage to persist cart data across sessions.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps
1. Clone the repo
```git clone https://github.com/your-username/e-commerce-app.git```
2. Navigate into the project directory:
```cd e-commerce-app````
3. Install the dependencies:
```npm install```
4. Start the development server:
```npm start```
5. Open your browser and go to http://localhost:3000.


## File Structure

```
e-commerce-app/
  node-modules/              # npm packages
  public/                    # Public assets (images, index.html)
  src/
    components/              # React components for different sections
      customers/              # Components related to customer management
        Customer.js           # Customer data model
        CustomerContext.js    # Context for customer state management
        CustomerList.jsx      # Display list of customers
        Customers.jsx         # Main customer management page
      orders/                 # Components related to order management
        Order.js              # Order data model
        OrderContext.js       # Context for order state management
        OrderList.jsx         # Display list of orders
        Orders.jsx            # Main order management page
      products/               # Components related to product management
        Product.js            # Product data model
        ProductContext.js     # Context for product state management
        ProductList.jsx       # Display list of products
        Products.jsx          # Main product management page
    pages/                    # Pages for routing
      404.jsx                 # 404 Error page
      CreateCustomerForm.jsx  # Form for creating a new customer
      CreateProductForm.jsx   # Form for creating a new product
      EditCustomerForm.jsx    # Form for editing an existing customer
      EditProductForm.jsx     # Form for editing an existing product
      Home.jsx                # Home page
      Shop.jsx                # Shop page (with shopping cart functionality)
    styles/                   # CSS styles for the app
      404.css                 # Styles for 404 page
      Form.css                # General form styles
      Home.css                # Styles for Home page
      List.css                # Styles for lists (e.g., customer, product lists)
      Shop.css                # Styles for the Shop page
    App.js                    # Main app component
    AppRoutes.jsx             # Routes and navigation
    index.jsx                 # Entry point for React app
    ...
```

## Features
- **Customer Management:** Add, edit, and view customer profiles.
- **Product Management:** View available products, add new products, and edit existing ones.
- **Shopping Cart:** Add and remove items from the cart, change item quantities, and view total price.
- **Order Management:** Place an order and view order history.
- **Persistent Cart:** Cart data is stored in localStorage and tied to a unique customerId for each customer.

## Technologies Used
- **React:** Front-end JavaScript library for building user interfaces.
- **React Router:** For handling routing and navigation.
- **React Context API:** For managing global state (customers, orders, products, and cart).
- **CSS:** For styling the application.

## Getting Started
1. **Run the app:** After installing dependencies, run the app locally using `npm start`.
2. **Create Customer Profiles:** Users can create new customer profiles from the `CreateCustomerForm.jsx` page.
3. **Add Products:** Admins can add new products via `CreateProductForm.jsx`.
4. **Shop for Products:** Navigate to the `Shop.jsx page`, browse products, add them to the cart, and view the cart with the option to checkout.
5. **Manage Orders:** Once a customer places an order, it will be stored and viewable in the `Orders.jsx` page.

## Summary
The E-Commerce App is a React-based application designed to manage customers, products, and orders for an online store. Users can create and manage customer profiles, browse products, add items to a shopping cart, place orders, and view order history. The app uses the React Context API for state management and persists cart data in localStorage, making the shopping experience seamless even across sessions. The app also includes features for admins to manage products and customer details.
=======
# True `README.md` is contained within the ecommerce-app
>>>>>>> e5ae7aa81c80a25d9826c7d0c7de5916022e1dc5

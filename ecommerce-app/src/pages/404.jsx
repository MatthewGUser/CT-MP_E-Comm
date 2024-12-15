// src/pages/404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-message">Page Not Found</div>
      <Link to="/" className="back-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

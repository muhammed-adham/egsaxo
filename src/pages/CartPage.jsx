import React from 'react';
import './CartPage.css';

const CartPage = () => {
  return (
    <div className="cart-page-container">
      <h1>Your Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
      {/* Cart items will be listed here */}
    </div>
  );
};

export default CartPage; 
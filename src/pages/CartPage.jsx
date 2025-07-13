import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartPage.css';
import BtnPrimary from '../components/BtnPrimary';

const CartPage = () => {

  const navigate=useNavigate()
  // Mock cart data - in real app this would come from context/state
  const cartItems = [
    {
      id: 1,
      name: "Alto Saxophone",
      price: 1299.99,
      quantity: 1,
      image: "/saxo-2.webp"
    },
    {
      id: 2,
      name: "Saxophone Reeds",
      price: 24.99,
      quantity: 2,
      image: "/Products/10382675_800.jpg"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50.00;
  const total = subtotal + shipping;

  return (
    <div className="cart-page-container">
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <BtnPrimary label={"Continue Shopping"} onClick={()=>navigate("/shop")}/>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <p className="item-quantity">Qty: {item.quantity}</p>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Delivery:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="total-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <BtnPrimary label={"Checkout"} showIcon={false} onClick={()=>navigate("/checkout")}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 
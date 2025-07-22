import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirm.css';
import BtnPrimary from '../components/BtnPrimary';
import ProductCard from '../components/ProductCard';

const OrderConfirm = () => {
    const navigate = useNavigate();

    // --- Mock Data (replace with actual data from state/props) ---
    const orderId = `SAXO-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const orderItems = [
        {
            id: 1,
            name: "Alto Saxophone",
            price: 1299.99,
            quantity: 1,
            image: "/saxo-2.webp"
        },
        {
            id: 2,
            name: "Saxophone Reeds (10-pack)",
            price: 24.99,
            quantity: 2,
            image: "/Products/10382675_800.jpg"
        }
    ];

    const deliveryAddress = {
        name: "John Doe",
        street: "123 Music Lane",
        city: "Jazzville",
        state: "CA",
        zip: "90210",
        country: "USA"
    };

    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50.00;
    const total = subtotal + shipping;

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
    const deliveryDateString = estimatedDelivery.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    // --- End Mock Data ---


    return (
        <div className="order-confirm-container">
            <div className="confirmation-header">
                <h1>Thank You For Your Order!</h1>
                <p className="order-id">Order Confirmation: <strong>#{orderId}</strong></p>
                <p>We've received your order and will start processing it right away.</p>
            </div>

            <div className="order-details-grid">
                <div className="order-summary-card">
                    <h2>Order Summary</h2>
                    <div className="order-items-list">
                        {orderItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <img src={item.image} alt={item.name} className="summary-item-image" />
                                <div className="summary-item-info">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-qty">Qty: {item.quantity}</span>
                                </div>
                                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="order-totals">
                        <div className="total-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="total-row grand-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="delivery-info-card">
                    <h2>Delivery Details</h2>
                    <div className="delivery-estimate">
                        <p>Estimated Delivery:</p>
                        <h3>{deliveryDateString}</h3>
                    </div>
                    <div className="delivery-address">
                        <p>Shipping to:</p>
                        <address>
                            <strong>{deliveryAddress.name}</strong><br />
                            {deliveryAddress.street}<br />
                            {deliveryAddress.city}, {deliveryAddress.state} {deliveryAddress.zip}<br />
                            {deliveryAddress.country}
                        </address>
                    </div>
                </div>
            </div>

            <div className="post-order-actions">
                <h2>Stay Updated</h2>
                <p>Want to check your order status or manage your purchase history?</p>
                <div className="action-buttons">
                    <BtnPrimary label="Create an Account" onClick={() => navigate('/signup')} />
                </div>
                <p className="login-prompt">
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </div>
        </div>
    );
};

export default OrderConfirm;
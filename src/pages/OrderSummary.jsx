import React, { useState, useEffect } from 'react'
import { FaTruckLoading } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';
import './OrderSummary.css'
import BtnOrder from '../components/BtnOrder';
import BtnPrimary from '../components/BtnPrimary';
import { Link } from 'react-router-dom';

const OrderSummary = ({ onConfirmChange, placeOrder }) => {
    // Confirmation state
    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {
        if (onConfirmChange) {
            onConfirmChange(isConfirmed);
        }
    }, [isConfirmed, onConfirmChange]);

    const isSubmitting = false
    // const total = 1000
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
        <>
            {/* Right Column - Order Summary */}
            <div className="order-summary-section">
                <div className="order-summary">
                    <h2>Order Summary</h2>

                    <div className="order__cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                    <p className="item-quantity">Qty: {item.quantity}</p>
                                </div>
                                <div className="item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-totals">
                        <div className="total-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Delivery</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="total-row total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="delivery-info">
                        <h3>Delivery Information</h3>
                        <div className="delivery-details">
                            <div className="delivery-item">
                                <span className="delivery-icon"><FaTruckLoading /></span>
                                <div>
                                    <strong>Standard Delivery</strong>
                                    <p>3-5 business days</p>
                                </div>
                            </div>
                            <div className="delivery-item">
                                <span className="delivery-icon"><SiCashapp /></span>
                                <div>
                                    <strong>Cash on Delivery</strong>
                                    <p>Pay when you receive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-summary-confirm">
                        <label>
                            <input
                                type="checkbox"
                                checked={isConfirmed}
                                onChange={e => setIsConfirmed(e.target.checked)}
                            />
                            {' '}I confirm my order summary is correct.
                        </label>
                        <div className="order-action">
                            <BtnPrimary onClick={placeOrder} disabled={!isConfirmed} onConfirmChange={onConfirmChange} placeOrder={placeOrder} showIcon={false} label={`Place order - EGP${total}`} />
                        </div>
                        <p className="order-note">
                            By placing your order, you agree to our
                            <Link onClick={() => scroll(0, 0)}>
                                {" "}Terms of Service{" "}
                            </Link>
                            and
                            <Link onClick={() => scroll(0, 0)} to={'/policy'}>
                                {" "}Privacy Policy.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
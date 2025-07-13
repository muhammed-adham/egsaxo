import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';
import { HiMiniCreditCard } from 'react-icons/hi2';
import { FaApple } from 'react-icons/fa';
import { HiCash } from 'react-icons/hi';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Order placed successfully! You will receive a confirmation email shortly.');
      // In real app, redirect to order confirmation page
    } catch (error) {
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Header */}
        <div className="checkout-header">
          <Link to="/cart" className="back-link">
            ← Back to Cart
          </Link>
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className="step active">
              <span className="step-number">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span className="step-number">3</span>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          {/* Left Column - Form */}
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              {/* Shipping Information */}
              <div className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={errors.city ? 'error' : ''}
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={errors.postalCode ? 'error' : ''}
                    />
                    {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={errors.country ? 'error' : ''}
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="NL">Netherlands</option>
                    <option value="BE">Belgium</option>
                    <option value="CH">Switzerland</option>
                    <option value="AT">Austria</option>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="DK">Denmark</option>
                    <option value="FI">Finland</option>
                    <option value="PL">Poland</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="HU">Hungary</option>
                    <option value="RO">Romania</option>
                    <option value="BG">Bulgaria</option>
                    <option value="HR">Croatia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SK">Slovakia</option>
                    <option value="LT">Lithuania</option>
                    <option value="LV">Latvia</option>
                    <option value="EE">Estonia</option>
                    <option value="IE">Ireland</option>
                    <option value="PT">Portugal</option>
                    <option value="GR">Greece</option>
                    <option value="CY">Cyprus</option>
                    <option value="MT">Malta</option>
                    <option value="LU">Luxembourg</option>
                    <option value="IS">Iceland</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="MC">Monaco</option>
                    <option value="SM">San Marino</option>
                    <option value="VA">Vatican City</option>
                    <option value="AD">Andorra</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.country && <span className="error-message">{errors.country}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Order Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Special instructions for delivery..."
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-section">
                <h2>Payment Method</h2>
                <div className="payment-methods">
                  <div className="payment-method disabled">
                    <div className="payment-method-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        disabled
                        id="card"
                      />
                      <label htmlFor="card" className="payment-label">
                        <div className="payment-icon"><HiMiniCreditCard /></div>
                        <div className="payment-info">
                          <span className="payment-name">Credit/Debit Card</span>
                          <span className="payment-description">Visa, Mastercard, American Express</span>
                        </div>
                      </label>
                    </div>
                    <div className="payment-disabled-message">
                      <span>Coming Soon</span>
                    </div>
                  </div>

                  <div className="payment-method disabled">
                    <div className="payment-method-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        disabled
                        id="paypal"
                      />
                      <label htmlFor="paypal" className="payment-label">
                        <div className="payment-icon"><FaApple /></div>
                        <div className="payment-info">
                          <span className="payment-name">Apple Pay</span>
                          <span className="payment-description">Pay with Apple Pay</span>
                        </div>
                      </label>
                    </div>
                    <div className="payment-disabled-message">
                      <span>Coming Soon</span>
                    </div>
                  </div>

                  <div className="payment-method active">
                    <div className="payment-method-header">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        defaultChecked
                        id="cod"
                      />
                      <label htmlFor="cod" className="payment-label">
                        <div className="payment-icon"><HiCash /></div>
                        <div className="payment-info">
                          <span className="payment-name">Cash on Delivery</span>
                          <span className="payment-description">Pay when you receive your order</span>
                        </div>
                      </label>
                    </div>
                    <div className="payment-enabled-message">
                      <span>✓ Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Processing...
                    </>
                  ) : (
                    `Place Order - $${total.toFixed(2)}`
                  )}
                </button>
                <p className="order-note">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>

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
                    <span className="delivery-icon">🚚</span>
                    <div>
                      <strong>Standard Delivery</strong>
                      <p>3-5 business days</p>
                    </div>
                  </div>
                  <div className="delivery-item">
                    <span className="delivery-icon">💰</span>
                    <div>
                      <strong>Cash on Delivery</strong>
                      <p>Pay when you receive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 
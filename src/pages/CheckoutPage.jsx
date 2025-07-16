import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';
import { HiMiniCreditCard } from 'react-icons/hi2';
import { FaApple } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';
import OrderAdress from './OrderAddress';
import OrderSummary from './OrderSummary';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import OrderConfirm from './OrderConfirm';

const CheckoutPage = () => {
  // Step: 0 = Address, 1 = Summary, 2 = Confirm
  const [step, setStep] = useState(0);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isSummaryConfirmed, setIsSummaryConfirmed] = useState(false);
  const [direction, setDirection] = useState('forward'); // 'forward' or 'backward'

  // Handlers for navigation
  const handleNext = () => {
    setDirection('forward');
    if (step === 0 && isAddressValid) {
      setStep(1);
    } else if (step === 1 && isSummaryConfirmed) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setDirection('backward');
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Render step content
  let stepContent;
  if (step === 0) {
    stepContent = (
      <OrderAdress onValidChange={setIsAddressValid} />
    );
  } else if (step === 1) {
    stepContent = (
      <OrderSummary onConfirmChange={setIsSummaryConfirmed} />
    );
  } else if (step === 2) {
    stepContent = <OrderConfirm />;
  }

  // Animation class for sliding
  const animationClass = `checkout-step-animate step-${step} slide-${direction}`;

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
            <div className={`step${step === 0 ? ' active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Delivery Address</span>
            </div>
            <div className="step-line"></div>
            <div className={`step${step === 1 ? ' active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Order Summary</span>
            </div>
            <div className="step-line"></div>
            <div className={`step${step === 2 ? ' active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Place Order</span>
            </div>
          </div>
        </div>
        <div className={animationClass}>
          {stepContent}
        </div>
      </div>
      <div className="checkout__nav">
        <button onClick={handlePrev} disabled={step === 0} className="checkout-nav-btn">
          <MdSkipPrevious />
        </button>
        {step < 2 && (
          <button
            onClick={handleNext}
            disabled={
              (step === 0 && !isAddressValid) ||
              (step === 1 && !isSummaryConfirmed)
            }
            className="checkout-nav-btn"
          >
            <MdSkipNext />
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage; 
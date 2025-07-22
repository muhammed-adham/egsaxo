import React, { useEffect, useState } from 'react'
import './BtnOrder.css'
import BtnPrimary from './BtnPrimary';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const BtnOrder = ({ onConfirmChange, placeOrder }) => {
    // Confirmation state
    const [isConfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {
        if (onConfirmChange) {
            onConfirmChange(isConfirmed);
        }
    }, [isConfirmed, onConfirmChange]);

    const isSubmitting = false
    const total = 1000
    return (
        <>
            {/* Submit Button */}
            <div className="order-actions">
                <label>
                    <input
                        type="checkbox"
                        checked={isConfirmed}
                        onChange={e => setIsConfirmed(e.target.checked)}
                    />
                    {' '}I confirm my order summary is correct.
                </label>
                {/* <button
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
                </button> */}
                    <BtnPrimary onClick={placeOrder} disabled={!isConfirmed} showIcon={false} label={`Place order - EGP${total}`} />
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
        </>
    )
}

export default BtnOrder
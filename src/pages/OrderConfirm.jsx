import React from 'react'
import './OrderConfirm.css'

const OrderConfirm = () => {
    const isSubmitting=false
    const total=1000
    return (
        <>
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
        </>
    )
}

export default OrderConfirm
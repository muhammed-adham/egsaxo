import React from 'react'
import './Page404.css'
import { GiSaxophone } from 'react-icons/gi'

const Page404 = () => {
    return (
        <div className="empty-state">
            {/* <div className="musical-note">🎵</div> */}
            <div className="rest-note">
                <div className="staff-lines">
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                </div>
                <div className="whole-rest">𝄽</div>
            </div>

            <h3 className="empty-title">
                Nothing Found — Yet
                {/* <GiSaxophone size={40} /> */}
            </h3>
            <p className="empty-message">
                We’re still tuning up.
                <br />
                More carefully selected saxophone gear is on the way.
                <br />
                {/* <br /> */}
                <span className="accent-text">— Be part of what comes next. —
                    {/* <br /> */}
                    {/* you’re helping shape what comes next. */}
                </span>
            </p>

            <div className="action-buttons">
                <button className="primary-btn">
                    <span>🎼</span>
                    Explore All Products
                </button>
                <button className="secondary-btn">
                    <span>🔔</span>
                    Notify Me When Available
                </button>
            </div>

            {/* <div className="musical-tip">
      <div className="tip-icon">💡</div>
      <p><strong>Pro Tip:</strong> Try adjusting your filters or browse by category to discover gear that'll make your sax sing!</p>
    </div> */}
        </div>
    )
}

export default Page404
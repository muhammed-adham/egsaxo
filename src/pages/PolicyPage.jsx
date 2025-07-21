import React from 'react';
import './PolicyPage.css';
import { Link } from 'react-router-dom';

const PolicyPage = () => {
  return (
    <div className="policy-section">
      <h1 className="policy-heading">Store Policies</h1>
      <p className="policy-description">We value your trust and strive to provide the best shopping experience. Please review our store policies below.</p>

      <h2 className="policy-subheading">Shipping Policy</h2>
      <ul className="policy-list">
        <li>Orders are processed within <span className="policy-highlight">1-2 business days</span>.</li>
        <li>Standard shipping typically takes <span className="policy-highlight">3-7 business days</span> depending on your location.</li>
        <li>Tracking information will be emailed once your order ships.</li>
        {/* <li>We offer free shipping on orders over <span className="policy-highlight">$99</span>.</li> */}
      </ul>

      <h2 className="policy-subheading">Returns & Exchanges</h2>
      <ul className="policy-list">
        <li>Returns are accepted within <span className="policy-highlight">7 days</span> of delivery.</li>
        <li>Items must be unused and in original packaging.</li>
        <li>To initiate a return, please message us on Instagram <a target='_blank' href="https://www.instagram.com/egsaxo/" className="policy-highlight"> @egsaxo</a>.</li>
        <li>Refunds are processed within <span className="policy-highlight">5 business days</span> after receiving the returned item.</li>
        <li>Exchanges are not available.</li>
      </ul>

      <h2 className="policy-subheading">Payment Methods</h2>
      <ul className="policy-list">
        <li>We currently accept <span className="policy-highlight">Cash on Delivery</span> only.</li>
        <li>Additional payment options — including Visa, MasterCard, PayPal, and Apple Pay — will be available soon.</li>
        <li>All future transactions will be secured and encrypted.</li>
      </ul>

      <h2 className="policy-subheading">Privacy Policy</h2>
      <ul className="policy-list">
        <li>Your personal information is kept confidential and used only for order processing and communication.</li>
        <li>We do not share your data with third parties except as required to fulfill your order.</li>
        <li>For more details, see our <Link onClick={()=>{scroll(0,0)}} to="/privacy-policy" className="policy-highlight">Full Privacy Policy</Link>.</li>
      </ul>

      <h2 className="policy-subheading">Contact Us</h2>
      <p className="policy-contact-desc">Have questions or need assistance? We're here to help!</p>
      <ul className="policy-list">
        <li>Email: <a href="mailto:support@egsaxo.com" className="policy-highlight">support@egsaxo.com</a></li>
        <li>Phone: <span className="policy-highlight">+1 (555) 123-4567</span></li>
        <li>Live chat available Mon-Fri, 9am-5pm</li>
      </ul>
    </div>
  );
};

export default PolicyPage; 
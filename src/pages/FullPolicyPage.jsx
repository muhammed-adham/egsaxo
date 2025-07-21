import React from 'react';
import './FullPolicyPage.css';

const FullPolicyPage = () => (
  <div className="privacy-section">
    <h1 className="privacy-heading">Privacy Policy</h1>
    <p className="privacy-description">This Privacy Policy describes how EGSaxo ("we", "us", or "our") collects, uses, and protects your personal information when you use our website and services.</p>

    <h2 className="privacy-subheading">1. Information We Collect</h2>
    <ul className="privacy-list">
      <li><strong>Personal Information:</strong> Name, email address, shipping address, phone number, and payment details (if applicable).</li>
      <li><strong>Order Information:</strong> Details of products purchased, order history, and transaction records.</li>
      <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, and referring URLs.</li>
      <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
    </ul>

    <h2 className="privacy-subheading">2. How We Use Your Information</h2>
    <ul className="privacy-list">
      <li>To process and fulfill your orders.</li>
      <li>To communicate with you regarding your orders, account, or customer service inquiries.</li>
      <li>To improve our website, products, and services.</li>
      <li>To send you updates, promotions, and marketing communications (you may opt out at any time).</li>
      <li>To comply with legal obligations and prevent fraud.</li>
    </ul>

    <h2 className="privacy-subheading">3. How We Share Your Information</h2>
    <ul className="privacy-list">
      <li>We do <strong>not</strong> sell or rent your personal information to third parties.</li>
      <li>We may share your information with trusted service providers (e.g., payment processors, shipping partners) only as necessary to fulfill your order.</li>
      <li>We may disclose information if required by law or to protect our rights and safety.</li>
    </ul>

    <h2 className="privacy-subheading">4. Data Security</h2>
    <ul className="privacy-list">
      <li>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</li>
      <li>However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</li>
    </ul>

    <h2 className="privacy-subheading">5. Your Rights & Choices</h2>
    <ul className="privacy-list">
      <li>You may access, update, or delete your personal information by contacting us at <a target='_blank' href="https://www.instagram.com/egsaxo/" className="privacy-highlight">Instagaram</a>.</li>
      <li>You may opt out of marketing emails by following the unsubscribe instructions in those emails.</li>
      <li>Cookies can be managed through your browser settings.</li>
    </ul>

    <h2 className="privacy-subheading">6. Children's Privacy</h2>
    <ul className="privacy-list">
      <li>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</li>
    </ul>

    <h2 className="privacy-subheading">7. Changes to This Policy</h2>
    <ul className="privacy-list">
      <li>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</li>
    </ul>

    <h2 className="privacy-subheading">8. Contact Us</h2>
    <ul className="privacy-list">
      <li>If you have any questions or concerns about this Privacy Policy, please contact us at <a target='_blank' href="https://www.instagram.com/egsaxo/" className="privacy-highlight">Instagaram</a>.</li>
    </ul>
    <p className="privacy-effective-date">Effective Date: June 1, 2024</p>
  </div>
);

export default FullPolicyPage; 
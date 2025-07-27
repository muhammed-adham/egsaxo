import React from "react";
import "./PolicyPage.css";
import { Link } from "react-router-dom";

const PolicyPage = () => {
  return (
    <div className="policy-section">
      <h1 className="policy-heading">Store Policy</h1>
      <p className="policy-description">
        Thanks for shopping with us! Please take a moment to review our store
        policies.
      </p>

      <div className="policy__list-container">
        <h2 className="policy-subheading">Shipping Policy</h2>
        <ul className="policy-list">
          <li>
            Orders are processed within{" "}
            <span className="policy-highlight">1-2 business days</span>.
          </li>
          <li>
            We currently ship only within Egypt. Delivery typically takes{" "}
            <span className="policy-highlight">3-7 business days</span>.
          </li>
          <li>Tracking information will be emailed once your order ships.</li>
          {/* <li>We offer free shipping on orders over <span className="policy-highlight">$99</span>.</li> */}
        </ul>

        <h2 className="policy-subheading">Returns & Exchanges</h2>
        <ul className="policy-list">
          <li>
            Returns are accepted within{" "}
            <span className="policy-highlight">7 days of delivery.</span>
          </li>
          <li>
            Items must be{" "}
            <span className="policy-highlight">
              unused and in original packaging.
            </span>
          </li>
          <li>
            To initiate a return,{" "}
            <a href="/contact" className="policy-highlight">
              {" "}
              contact us here
            </a>
            .
          </li>
          <li>
            Refunds are processed within{" "}
            <span className="policy-highlight">5 business days</span> after
            receiving the returned item.
          </li>
          <li>
            <span className="policy-highlight">
              Exchanges are not available
            </span>{" "}
            at this time.
          </li>
        </ul>

        <h2 className="policy-subheading">Payment Methods</h2>
        <ul className="policy-list">
          <li>
            We currently accept{" "}
            <span className="policy-highlight">Cash on Delivery</span> only.
          </li>
          <li>
            <span className="policy-highlight">Coming soon </span>— Visa,
            MasterCard, PayPal, and Apple Pay.
          </li>
          <li>
            All future transactions will be{" "}
            <span className="policy-highlight">secured and encrypted.</span>
          </li>
        </ul>

        <h2 className="policy-subheading">Privacy & Data Use</h2>
        <ul className="policy-list">
          <li>
            Your personal information is used only to
            <span className="policy-highlight">
              {" "}
              process your order and communicate with you
            </span>
            .
          </li>
          <li>
            We do not share your data with third parties, except when necessary
            to fulfill your order (e.g., for shipping).
          </li>
          <li>
            For full details, please see our{" "}
            <Link
              onClick={() => {
                scroll(0, 0);
              }}
              to="/privacy"
              className="policy-highlight"
            >
              Privacy Policy
            </Link>
            .
          </li>
        </ul>

        <h2 className="policy-subheading">Contact Us</h2>
        <ul className="policy-list">
          <p className="policy-contact-desc">
            Need help or have a question? We're here for you!
          </p>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/egsaxo/"
              className="policy-highlight"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.tiktok.com/@egsaxo"
              className="policy-highlight"
            >
              TikTok
            </a>
          </li>
          <li>
            <a href="/contact" className="policy-highlight">
              Get in touch
            </a>
          </li>
          {/* <li>Live chat available Mon-Fri, 9am-5pm</li> */}
        </ul>
      </div>
    </div>
  );
};

export default PolicyPage;

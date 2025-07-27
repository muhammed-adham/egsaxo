import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Wave Section */}
      <div className="wave-section">
        <svg
          className="wave-svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path wave-1"
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
          />
          <path
            className="wave-path wave-2"
            d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z"
          />
          <path
            className="wave-path wave-3"
            d="M0,100 C200,40 1000,80 1200,20 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="site-footer">
        <div className="site-footer__wrapper">
          <div className="footer-content">
            <div className="footer-main">
              <h3 className="footer-title">
                <span>EG</span>SAXO
              </h3>
              <p className="footer-tagline">
                Your one-stop shop for saxophone accessories in Egypt.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="/policy">Store Policy</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="help-center">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/egsaxo/"
                    className="social-link"
                  >
                    Instagram
                  </a>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@egsaxo"
                    className="social-link"
                  >
                    TikTok
                  </a>
                  {/* <a href="#youtube" className="social-link">YouTube</a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} SaxoEG. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

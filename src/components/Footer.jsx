import React from 'react';
import './Footer.css';

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
              <h3 className="footer-title"><span>EG</span>SAXO</h3>
              <p className="footer-tagline">Your one-stop shop for saxophone accessories in Egypt.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#shipping">Shipping Info</a></li>
                  <li><a href="#returns">Returns</a></li>
                  {/* <li><a href="#warranty">Warranty</a></li> */}
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#facebook" className="social-link">TikTok</a>
                  <a href="#instagram" className="social-link">Instagram</a>
                  {/* <a href="#youtube" className="social-link">YouTube</a> */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SaxoEG. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
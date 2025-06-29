import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__wrapper">
        <p>&copy; {new Date().getFullYear()} SaxoEG. All Rights Reserved.</p>
        <p>Your one-stop shop for saxophone accessories in Egypt.</p>
      </div>
    </footer>
  );
};

export default Footer; 
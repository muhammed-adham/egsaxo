import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import CartIcon from './CartIcon';
import HelpIcon from './HelpIcon';
import UserDropdown from './UserDropdown';
import './Header.css';

const Header = () => {
  const navLinks=[
    {label:"Shop", url:'/'},
    {label:"About", url:'/about'},
    {label:"Policy", url:'/policy'}
  ]
  return (
    <>
      <AnnouncementBar />
      <header className="site-header">
        <div className="site-header__wrapper">
          <div className="site-header__brand">
            {/* <Link to="/"><span>EG</span>SAX </Link> */}
            <nav className="site-header__nav">
              <ul>
               { navLinks.map((link,idx)=>(
                  
                  <li key={idx}><Link to={link.url}>{link.label}</Link></li>
                ))}
                {/* <li><Link to="/about">About</Link></li>
                <li><Link to="/policy">Policy</Link></li> */}
              </ul>
            </nav>
          </div>
          <div className="site-header__actions">
            <UserDropdown />
            <Link to="/help-center" className="site-header__icon-link">
              <HelpIcon />
              <span>Help</span>
            </Link>
            <Link to="/cart" className="site-header__icon-link">
              <CartIcon />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 
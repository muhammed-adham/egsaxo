import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import './UserDropdown.css';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = 'Guest'; // Placeholder
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button className={`${isOpen?"active":""} user-dropdown__button`} onClick={toggleDropdown}>
        <ProfileIcon />
        <span>Hi, {username}</span>
        <span className="user-dropdown__arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="user-dropdown__menu">
          <li><Link to="customer/account">My Account</Link></li>
          <li><Link to="customer/orders">Orders</Link></li>
          <li><Link to="customer/inbox">Inbox</Link></li>
          <li><Link to="customer/wishlist">Wishlist</Link></li>
          <li><Link to="customer/vouchers">Vouchers</Link></li>
          <li><button className="user-dropdown__logout">Logout</button></li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown; 
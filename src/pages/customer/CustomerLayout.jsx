import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './CustomerLayout.css';

const navItems = [
  { to: '/customer/account', label: 'Account Details' },
  { to: '/customer/orders', label: 'Orders' },
  { to: '/customer/inbox', label: 'Inbox' },
  { to: '/customer/wishlist', label: 'Wishlist' },
  { to: '/customer/vouchers', label: 'Vouchers' },
];

const CustomerLayout = () => (
  <div className="customer-layout">
    <nav className="customer-nav">
      <ul>
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <section className="customer-content">
      <Outlet />
    </section>
  </div>
);

export default CustomerLayout; 
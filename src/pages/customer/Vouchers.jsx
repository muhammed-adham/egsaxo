import React, { useState } from 'react';

const Vouchers = () => {
  const [filter, setFilter] = useState('active');
  const vouchers = [];

  return (
    <div>
      <h2>My Vouchers</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <button onClick={() => setFilter('active')} style={{ fontWeight: filter === 'active' ? 700 : 400 }}>Active</button>
        <button onClick={() => setFilter('inactive')} style={{ fontWeight: filter === 'inactive' ? 700 : 400 }}>Inactive</button>
      </div>
      {vouchers.length > 0 ? (
        <div>/* Vouchers list here */</div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p>You currently have no available Jumia Credit<br/>All your available Jumia credit and coupons will be displayed here</p>
          <a href="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Continue Shopping</a>
        </div>
      )}
    </div>
  );
};

export default Vouchers; 
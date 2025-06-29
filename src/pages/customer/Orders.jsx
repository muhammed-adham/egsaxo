import React, { useState } from 'react';

const Orders = () => {
  const [tab, setTab] = useState('ongoing');
  const hasOrders = false;

  return (
    <div>
      <h2>My Orders</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <button onClick={() => setTab('ongoing')} style={{ fontWeight: tab === 'ongoing' ? 700 : 400 }}>Ongoing/Delivered (0)</button>
        <button onClick={() => setTab('closed')} style={{ fontWeight: tab === 'closed' ? 700 : 400 }}>Closed Orders</button>
      </div>
      {hasOrders ? (
        <div>/* Orders list here */</div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p>You have placed no orders yet!<br/>All your orders will be saved here for you to access their state anytime.</p>
          <a href="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Continue Shopping</a>
        </div>
      )}
    </div>
  );
};

export default Orders; 
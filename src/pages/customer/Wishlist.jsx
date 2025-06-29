import React from 'react';

const wishlist = [];

const Wishlist = () => (
  <div>
    <h2>My Wishlist</h2>
    {wishlist.length > 0 ? (
      <div>/* Product cards here */</div>
    ) : (
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <p>You haven't saved an item yet!<br/>Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
        <a href="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Continue Shopping</a>
      </div>
    )}
  </div>
);

export default Wishlist; 
import React from 'react';

const mails = [];

const Inbox = () => (
  <div>
    <h2>Inbox</h2>
    {mails.length > 0 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {mails.map((mail, idx) => (
          <div key={idx} style={{ border: '1px solid var(--color-border)', borderRadius: 8, padding: 16 }}>
            <strong>{mail.subject}</strong>
            <p>{mail.body}</p>
          </div>
        ))}
      </div>
    ) : (
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <p>Your inbox is empty.</p>
        <a href="/" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Continue Shopping</a>
      </div>
    )}
  </div>
);

export default Inbox; 
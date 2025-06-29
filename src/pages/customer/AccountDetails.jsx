import React from 'react';

const AccountDetails = () => (
  <div>
    <h2>Account Details</h2>
    <div style={{marginBottom: '2rem'}}>
      <h3>Personal Information</h3>
      <p>Name: John Doe</p>
      <p>Email: johndoe@email.com</p>
    </div>
    <div style={{marginBottom: '2rem'}}>
      <h3>Address Book</h3>
      <p>No addresses saved yet.</p>
    </div>
    <div>
      <h3>Newsletter Preferences</h3>
      <p>You are subscribed to our newsletter.</p>
    </div>
  </div>
);

export default AccountDetails; 
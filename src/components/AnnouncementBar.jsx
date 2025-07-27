import React from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = ({announcement}) => {
  return (
    <div className="announcement-bar">
      {/* <p>Free shipping on all orders within Egypt!</p> */}
      <p>{announcement}</p>
    </div>
  );
};

export default AnnouncementBar; 
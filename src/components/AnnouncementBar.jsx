import React from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = ({announcemen}) => {
  return (
    <div className="announcement-bar">
      {/* <p>Free shipping on all orders within Egypt!</p> */}
      <p>{announcemen}</p>
    </div>
  );
};

export default AnnouncementBar; 
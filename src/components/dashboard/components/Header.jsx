import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Company Logo" />
      </div>
      <div className="profile">
        <img src="/path-to-profile-picture.png" alt="Profile" className="profile-picture" />
        <span className="profile-name">John Doe</span>
      </div>
    </header>
  );
};
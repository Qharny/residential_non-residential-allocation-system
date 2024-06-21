import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
// import userIcon from '../../assets/icons/user.svg';
import './style.css'

const Header = () => {
  return (
   <header>
    <div className="header">
      <div className="logo">
        Logo
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* <li><a href="/login">Login</a></li> */}
        </ul>
      </nav>
    </div>
   </header>
  );
};

export default Header;
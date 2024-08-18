import React from 'react';
import whatsapp from '..//../assets/whatsapp.png';
import cart from '..//../assets/cart.svg'; 
import logo from '..//../assets/logo.png'
import './nav.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo"> 
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Take a Test</li>
            <li>Sign-up/Login</li>
          </ul>
        </div>
        <div className="actions"> 
          <a href="https://wa.me/7829151919" className="whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
            7829151919
          </a>
          <div className="cart">
            <img src={cart} alt="Shopping Cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
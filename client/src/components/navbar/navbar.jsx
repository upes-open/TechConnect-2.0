import React from 'react';
import './navbar.css';

// import image from "../../assets/img/logo/techconnect.jpeg"
// import image2 from "../../assets/img/logo/open.png"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='left'>
        <img src="techconnect.jpeg" className='navimg' alt="Left" />
        <a href="/" className='nav-head'>TECHCONNECT</a>
      </div>
      <div className='right'>
        <a href="/login">
          <button className='loginBtn'>Login</button>
        </a>
        <img src="open.png" className='navimg rightImg' alt="Right" />
      </div>
    </nav>
  );
}

export default Navbar;
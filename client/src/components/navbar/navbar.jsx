import React from 'react';
import './navbar.css';

// import image from "../../assets/img/logo/techconnect.jpeg"
// import image2 from "../../assets/img/logo/open.png"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <img src="techconnect.jpeg" className='nav-image' alt="Left" />
      </div>
      <div className='right-nav'>
        <a href="/login">
          <button className='loginBtn'>
            Login
          </button>
        </a>
        <img src="open.png" className='nav-image rightImg' alt="Right" />
      </div>
    </nav>
  );
}

export default Navbar;
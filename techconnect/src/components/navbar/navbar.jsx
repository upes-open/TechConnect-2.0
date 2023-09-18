import React from 'react';
import './navbar.css';

function Navbar() {
    return (
      <nav className="navbar1">
        <div className="navbar-left">
            <img src="techconnect.jpeg" alt="Left Image" />
            <img src="open.png" alt="Right Image" />
        </div>
        <div className="navbar2">
            <div className="navbar-right">
                <button>Login</button>
            </div>
            
        </div>
      </nav>
    );
  }
  
  export default Navbar;
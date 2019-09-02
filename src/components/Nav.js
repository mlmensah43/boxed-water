import React from 'react';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="flex-container header">
        <div className="logo">
            BOXED<br/>WATER <br/>  IS <br/>  BETTER.
        </div>
        <nav className="flex-container nav">
            <ul>
                <li className="nav-item">shop</li>
                <li className="nav-item">account</li>
                <li className="nav-item">cart</li>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;

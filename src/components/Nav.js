import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="flex-container-row">
        <div className="logo">
            <Link className="link" to="/" >BOXED<br/>WATER <br/>  IS <br/>  BETTER.</Link> 
        </div>
        <div className="flex-container-row nav">
            <ul>
                <li className="nav-item"><Link to="/shop" className="link">shop</Link></li>
                <li className="nav-item"><Link to="/cart" className="link">cart</Link></li>
            </ul>
        </div>
    </div>
  );
}

export default Nav;

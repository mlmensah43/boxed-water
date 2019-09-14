import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="flex-container-row">
        <div className="logo">
            <Link className="link" to="/" >BOXED<br/>WATER<br/>IS<br/>BETTER.</Link> 
        </div>
        <div className="flex-container-row nav">
              <div className="nav-item"><Link to="/shop" className="link">shop</Link></div>
              <div>
                <Link to="/cart" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                </Link>
              </div>
        </div>
    </div>
  );
}

export default Nav;

import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <Link className="header-link" to="/">
          Home
        </Link>
        <nav className="navbar">
          <Link to="/favourites" className="navbar__link">
            My Favourites
          </Link>
          <Link className="navbar__link" to="/holidays"> Holiday</Link>
          <Link className="navbar__link" to="/about-us"> About us</Link>
        </nav>
      </div>
    </div>
  );
};
export default Header;

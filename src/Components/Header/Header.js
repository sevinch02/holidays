import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <nav className="navbar">
        <Link className="header-link" to="/">
          Home
        </Link>
          <Link to="/favourites" className="navbar__link">
            My Favourites
          </Link>
          <Link to="/holidays" className="navbar__link">
            Holidays
          </Link>
          <div>
            <Link className="About" to="/about-us">About us</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;

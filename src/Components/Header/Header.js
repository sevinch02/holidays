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
          <Link to="/" className="navbar__link">
            My Favourites
          </Link>
          <Link className="navbar__link" to="/"> Holiday</Link>
        </nav>
      </div>
    </div>
  );
};
export default Header;

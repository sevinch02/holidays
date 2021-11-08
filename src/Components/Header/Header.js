import React from 'react';
import {Link} from "react-router-dom";
import  '../Header/header.css'
const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: 'url(/img/People-fireworks.jpg)'}}>
      <div className='container'>

      <div className="row">
        <nav className="navbar">
        <Link className="navbar__link" to="/">
          Home
        </Link>
          <Link to="/favourites" className="navbar__link ">
            My Favourites
          </Link>
          <Link className="navbar__link" to="/holidays"> Holiday</Link>
          <Link className="navbar__link" to="/about-us"> About us</Link>
        </nav>
        <div className='log_in'>
          <Link className="navbar__link" to='/log-in'>Log in</Link>
        </div>
      </div>
      </div>
      <h1 className='sayt-name'>FIESTA</h1>
    </div>
  );
};
export default Header;

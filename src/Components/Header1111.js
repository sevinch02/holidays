import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
        <div className="row">
        <Link className="header-link" to=""> Movies </Link> 
         <nav className="navbar">
          <Link className="navbar__link"> My Favourites </Link>
          <Link className="navbar__link" to="">Contact us</Link> 
         </nav>
        </div>
       
      </div>
    )
}

export default Header;

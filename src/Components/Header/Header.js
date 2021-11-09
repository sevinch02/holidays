import React from 'react';
import {Link} from "react-router-dom";
import { Select } from 'antd';
import  '../Header/header.css'
const Header = () => {
 
  return (
    <div className="header">
      <div className='container'>

      <div className="row">
        <nav className="navbar">
        <Link className="navbar__link" to="/">
          <h1  className='sayt-name'>FIESTA</h1>
        </Link>
        
        </nav>
        <div className='lang'>
          <select className='language'>
            <option>Eng</option>
            <option>Rus</option>
            <option>Uzb</option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Header;

import React from 'react';
import cssfoot from './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="row">
        <h3 className=' footer__title'>FIESTA</h3>
        <ul className="footer-links">
           <Link to='/holiday'> <li className="footer__link">Holiday</li> </Link>
          <Link to="/catalog">  <li className="footer__link">Country</li> </Link>
        </ul>    
        <ul className="social-links footer-links" >
            <li className="social__link"> <i className="icon-Instagram" ><span class="icon-instagram1"></span> </i> Instagram</li>
            <li className="social__link">Telegram</li>
            <li className="social__link">Facebook</li>
        </ul>

      </div>
      </div>

    </div>
  );
};

export default Footer;

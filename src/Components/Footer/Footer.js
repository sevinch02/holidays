import React from 'react';
import cssfoot from './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="row">
        <h3 className=' footer__title'>FIESTA</h3>
        <ul className="footer-links">
            <li className="footer__link">Holiday</li>
            <li className="footer__link">Country</li>
        </ul>    
        <ul className="social-links footer-links" >
            <li className="social__link"> <i className="icon-Instagram" > </i> Instagram</li>
            <li className="social__link">Telegram</li>
            <li className="social__link">Facebook</li>
        </ul>

      </div>
      </div>

    </div>
  );
};

export default Footer;

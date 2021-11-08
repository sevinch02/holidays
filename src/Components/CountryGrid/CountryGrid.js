import React from 'react';
import css from './countrygrid.css'
// import {Link} from 'react';

const CountryGrid = () => {
    return (
        <div className="CountryGrid">
            <h3>Find by Country</h3>
            <div className="grid-container" >        
            <img className="grid-item country-grid__img" src="img/dubai.jpg"  alt="duabi" /> 
            <img style={{height: 310 , objectFit: 'cover' }} className="grid-item country-grid__img" src="img/istanbul.jpg" alt=""  /> 
            <img className="grid-item country-grid__img " src="img/london.jpg" alt="london "  /> 
            <img className="grid-item country-grid__img" src="img/korea.jpg" alt="korea"  /> 
            <img className="grid-item country-grid__img" src="img/parij.jpg" alt="parij"  />
            <img className="grid-item country-grid__img" src="img/rim.jpg" alt="roma"  /> 
           </div>
        </div>
    );
};
export default CountryGrid;

import React from 'react';
import './countrygrid.css'
import{Link} from 'react-router-dom'

const CountryGrid = () => {
    return (
    <div className="container12">
    <div className="grid-container" >
        <Link to="/country/:id" className=" grid-item slide-down four column-grid" style={{width: 188 , height: 300}}>
            <div className="box">
             <span className="original">
                <img className="original__img"
                 src="img/dubai.jpg" alt="dubai"/>
               </span>
             <div className="overlay">
              <i className="fa fa-users fa-3x" aria-hidden="true">Dubai</i>
              </div>
           </div>
          </Link>
       <Link to="/country/:id"className=" grid-item slide-down four column-grid" style={{width :436 , height: 300}} > 
        <div className="box" >
        <span className="original" > 
        <img className="original__img"
         src="img/london.jpg"alt="london"/> 
        </span>
        <div className="overlay">
            <i className="fa fa-users fa-3x" aria-hidden="true">London</i>
          </div>
        </div>
       </Link>
       <Link to="/country/:id" className="grid-item slide-down four column-grid"  style={{width :268 ,height: 300}} > 
          <div className="box">
              <span className="original">
             <img  className="original__img"
              src="img/korea.jpg"alt="korea"/> 
         </span>
         <div className="overlay">
            <i className="fa fa-users fa-3x" aria-hidden="true">Korea</i>
          </div>
         </div>
         </Link>
         <Link to="/country/:id" className=" grid-item slide-down four column-grid"  style={{ width: 356 , height: 300 }} >
         <div className="box">
             <span className="original" >
             <img  className="original__img"  src="img/milano-middle.jpg"alt="roma"/> 
             </span>
             <div className="overlay">
                 <i className="fa fa-users fa-3x" aria-hidden="true">Milan</i>
               </div>
         </div>
          </Link>
          <Link to="/country/:id" className="grid-item slide-down four column-grid grid-item" style={{width:621, height:300}} >  
          <div className="box"> 
              <span className="original">
             
              <img  className="original__img" src="img/rim.jpg"alt="roma"/> 
              </span>
        
               <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Roma</i>
                  </div>
          </div>
         </Link>
         <Link to="/country/:id"  className=" grid-item slide-down four column-grid"  style={{width: 631 , height: 300 }} >
             <div className="box">
                 <span className="original">
                 <img  className="original__img"  src="img/moskva-large.jpg"alt="russia"/> 
                 </span>
                 <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Moscow</i>
                  </div>
             </div>
             </Link>
       <Link to="/country/:id"  className="grid-item slide-down four column-grid"  style={{width:354 , height: 300 }}> 
       <div className="box">
           <span className="original">
           <img  className="original__img"  src="img/singopur-large.jpg"alt="singapure"/> 
           </span>
           <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Singapour</i>
            </div>
       </div>
       
       </Link>
       <Link to="/country/:id"  className="grid-item slide-down four column-grid"   style={{width:412, height:300}}>
        <div className="box">
            <span className="original">
            <img  className="original__img"  src="img/parij.jpg"alt="parij"/>
            </span>
            <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Parij</i>
                  </div>
        </div>   
         </Link>
    <Link to="/country/:id"  className="grid-item slide-down four column-grid"  style={{width:428 , height:300}}>
    <div className="box">
    <span className="original">
    <img  className="original__img"  src="img/uzbekistan.jpg"alt="roma"/> 
    </span>   
    <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Uzbekistan</i>
                  </div> 
    </div>    
     </Link>
       <Link to="/country/:id"  className=" grid-item slide-down four column-grid"  style={{width: 478, height:300}} > 
        <div className="box"> 
            <span className="original">
           <img className="original__img"   src="img/new-york-small.jpg"alt="america"/> 
        </span>
        <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">New-York</i>
                  </div>
        </div>
        </Link>
        <Link to="/country/:id"  className=" grid-item slide-down four column-grid"  style={{width: 354, height:300}} > 
        <div className="box">
            <span className="original">
            <img  className="original__img"   src="img/san-fransisko.jpg"alt="america"/> 
            </span>
            <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">San Francico</i>
                  </div>
        </div>
        </Link>
    <Link to="/country/:id"  className="grid-item slide-down four column-grid"  style={{width:619 , height:300}}> 
    <div className="box"> 
        <span className="original">
      <img  className="original__img"  src="img/cairo.jpg"alt="cairo"/> 
     </span>
     <div className="overlay">
          <i className="fa fa-users fa-3x" aria-hidden="true">Egypt</i>
     </div>
      </div>
      </Link>
      <Link to="/country/:id" className="grid-item slide-down four column-grid" style={{width:265 , height:300}}>
      <div className="box"> 
        <span className="original">
      <img  className="original__img"  src="img/istanbul.jpg"alt="istanbul"/> 
     </span>
     <div className="overlay">
          <i className="fa fa-users fa-3x" aria-hidden="true">Turkey</i>
     </div>
      </div>
      </Link>
      <Link to="/country/:id" className="grid-item slide-down four column-grid" style={{width:840 , height:300}}>
      <div className="box"> 
        <span className="original">
      <img  className="original__img"  src="img/largge-bg.jpg"alt=""/> 
     </span>
     <div className="overlay">
          <i className="fa fa-users fa-3x" aria-hidden="true">mmm</i>
     </div>
      </div>
      </Link>
       nimafir
    </div>
    <Link to="/countrycatalog" > <button className="gocountry-btn" type="button"> View all Country  </button> </Link>
    </div>
    );
};
export default CountryGrid;

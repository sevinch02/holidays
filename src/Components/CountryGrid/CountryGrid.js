
import React from 'react';
import css from './countrygrid.css'
import{Link} from 'react-router-dom'

const CountryGrid = () => {
    return (
    <div className="container12">
    <div className="grid-container" >
        <Link to="/viewcountry" className=" grid-item slide-down four column-grid" style={{width: 188 , height: 300}}>
            <div className="box">
             <span className="original">
                <img className=" " style={{width: 188 , height: 300}} 
                 src="img/dubai.jpg" alt="dubai"/>
               </span>
             <div className="overlay">
              <i className="fa fa-users fa-3x" aria-hidden="true">Dubai</i>
              </div>
           </div>
          </Link>
       <Link to="/viewcountry"className=" grid-item slide-down four column-grid" style={{width :436 , height: 300}} > 
        <div className="box" >
        <span className="original" > 
        <img className="" style={{width :436 , height: 300}}
         src="img/london.jpg"alt="london"/> 
        </span>
        <div className="overlay">
            <i className="fa fa-users fa-3x" aria-hidden="true">London</i>
          </div>
        </div>
       </Link>
       <Link to="/viewcountry" className="grid-item slide-down four column-grid"  style={{width :268 ,height: 300}} > 
          <div className="box">
              <span className="original">
             <img  className="" style={{width :268 ,height: 300}} 
              src="img/korea.jpg"alt="korea"/> 
         </span>
         <div className="overlay">
            <i className="fa fa-users fa-3x" aria-hidden="true">Korea</i>
          </div>
         </div>
         </Link>
         <Link to="/viewcountry" className=" grid-item slide-down four column-grid"  style={{ width: 468 , height: 300 }} >
         <div className="box">
             <span className="original" >
             <img  className="" style={{ width: 468 , height: 300 }} src="img/milano-middle.jpg"alt="roma"/> 
             </span>
             <div className="overlay">
                 <i className="fa fa-users fa-3x" aria-hidden="true">Milan</i>
               </div>
         </div>
          </Link>
          <Link to="/viewcountry" className="grid-item slide-down four column-grid grid-item" style={{width:421, height:300}} >  
          <div className="box"> 
              <span className="original">
              {/* <img  className="" style={{width:401, height:300}} 
              src="img/dubai.jpg"alt="dubi"/>  */}
              <img  className="" style={{width:421 , height:300}}  src="img/rim.jpg"alt="roma"/> 
              </span>
        
               <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Roma</i>
                  </div>
          </div>
         </Link>
         <Link to="/viewcountry"  className=" grid-item slide-down four column-grid"  style={{width: 480 , height: 300 }} >
             <div className="box">
                 <span className="original">
                 <img  className="" style={{width: 480 , height: 300 }} src="img/moskva-large.jpg"alt="russia"/> 
                 </span>
                 <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Moscov</i>
                  </div>
             </div>
             </Link>
       <Link to="/viewcountry"  className="grid-item slide-down four column-grid"  style={{width: 599 , height: 300 }}> 
       <div className="box">
           <span className="original">
           <img  className="grid-item" style={{width: 599 , height: 300 }} src="img/singopur-large.jpg"alt="singapure"/> 
           </span>
           <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Singapour</i>
            </div>
       </div>
       
       </Link>
       <Link to="/viewcountry"  className="grid-item slide-down four column-grid"   style={{width:270, height:300}}>
        <div className="box">
            <span className="original">
            <img  className="" style={{width:270, height:300}} src="img/parij.jpg"alt="parij"/>
            </span>
            <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Parij</i>
                  </div>
        </div>   
         </Link>
    <Link to="/viewcountry"  className="grid-item slide-down four column-grid"  style={{width:428 , height:300}}>
    <div className="box">
    <span className="original">
    <img  className="" style={{width:428 , height:300}}  src="img/uzbekistan.jpg"alt="roma"/> 
    </span>   
    <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">Rim</i>
                  </div> 
    </div>    
     </Link>
       <Link to="/viewcountry"  className=" grid-item slide-down four column-grid"  style={{width: 205, height:300}} > 
        <div className="box"> 
            <span className="original">
           <img className="" style={{width: 205, height:300}}  src="img/new-york-small.jpg"alt="america"/> 
        </span>
        <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">New-York</i>
                  </div>
        </div>
        </Link>
        <Link to="/viewcountry"  className=" grid-item slide-down four column-grid"  style={{width: 490, height:300}} > 
        <div className="box">
            <span className="original">
            <img  className="" style={{width: 490, height:300}}  src="img/san-fransisko.jpg"alt="america"/> 
            </span>
            <div className="overlay">
                   <i className="fa fa-users fa-3x" aria-hidden="true">San Francico</i>
                  </div>
        </div>
        </Link>
    <Link to="/viewcountry"  className="grid-item slide-down four column-grid"  style={{width:628 , height:300}}> 
    <div className="box"> 
        <span className="original">
      <img  className="" style={{width:628 , height:300}}  src="img/cairo.jpg"alt="cairo"/> 
     </span>
     <div className="overlay">
          <i className="fa fa-users fa-3x" aria-hidden="true">Egypt</i>
     </div>
      </div>
      </Link>
      <Link to="/viewcountry" className="grid-item slide-down four column-grid" style={{width:521 , height:300}}>
      <div className="box"> 
        <span className="original">
      <img  className="" style={{width:521 , height:300}}  src="img/istanbul.jpg"alt="istanbul"/> 
     </span>
     <div className="overlay">
          <i className="fa fa-users fa-3x" aria-hidden="true">Turkey</i>
     </div>
      </div>
      </Link>
    </div>
    <Link to="/catalog" > <button type="button"> cataloga otish </button> </Link>
    </div>
    );
};
export default CountryGrid;

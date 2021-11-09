import React from 'react';
import css from './countrygrid.css'
// import {Link} from 'react';
import { Row, Col, Divider } from 'antd';
import{Link} from 'react-router-dom'



const CountryGrid = () => {
    const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
  
    return (
    <div className="container12">
    {/* <div style={{backgroundImage : 'url(/img/largge-bg.jpg)', backgroundRepeat : 'no-repeat', backgroundPosition: 'center'  }}  > */}
    <div ClassName="grid-container" >
        <Link to="" className="slide-down four col" style={{width: 188 , height: 300}}>
            <div class="box">
            <span class="original">
          <img ClassName="grid-item  " style={{width: 188 , height: 300}} 
          src="img/dubai.jpg" alt=""/>
          </span>
          <div class="overlay">
            <i class="fa fa-users fa-3x" aria-hidden="true">dssdffff</i>
          </div>
           </div>
</Link>
<Link to=""className="slide-down four col" style={{width :436 , height: 300}} > 
     <div className="box" >
       <span className="original" > 
      <img ClassName="grid-item" style={{width :436 , height: 300}}
       src="img/london.jpg"alt=""/> 
        </span>
        <div class="overlay">
            <i class="fa fa-users fa-3x" aria-hidden="true">dssdffff</i>
          </div>
        </div>
       </Link>
       <Link to="" className="slide-down four col"  style={{width :268 ,height: 300}} > 
          <div className="box">
              <span className="original">
             <img  ClassName="grid-item" style={{width :268 ,height: 300}} 
              src="img/korea.jpg"alt="foture"/> 
         </span>
         <div class="overlay">
            <i class="fa fa-users fa-3x" aria-hidden="true">dssdffff</i>
          </div>
         </div>
         </Link>
         <Link to="" className="slide-down four col"  style={{ width: 468 , height: 300 }} >
         <div className="box">
             <span className="original" >
             <img  ClassName="grid-item" style={{ width: 468 , height: 300 }} src="img/milano-middle.jpg"alt="foture"/> 
             </span>
             <div class="overlay">
                 <i class="fa fa-users fa-3x" aria-hidden="true">dssdffff</i>
               </div>
         </div>
          </Link>
          <Link to="" className="slide-down four col" style={{width:241, height:300}} >  
          <div className="box"> 
              <span className="original">
              <img  ClassName="grid-item" style={{width:241, height:300}} 
              src="img/dubai.jpg"alt=""/> 
              </span>
        
               <div class="overlay">
                   <i class="fa fa-users fa-3x" aria-hidden="true">dssdffff</i>
                  </div>
          </div>
         </Link>   
        <img  ClassName="grid-item" style={{width: 427 , height: 300 }} src="img/moskva-large.jpg"alt="foture"/> 
         <img  ClassName="grid-item" style={{width: 481 , height: 300 }} src="img/singopur-large.jpg"alt="foture"/> 
      <img  ClassName="grid-item" style={{width:214, height:300}} src="img/parij.jpg"alt="foture"/>
        <img  ClassName="grid-item" style={{width:468 , height:300}}  src="img/rim.jpg"alt="foture"/> 
        <img ClassName="grid-item" style={{width: 437, height:300}}  src="img/new-york-small.jpg"alt="foture"/> 
     <img  ClassName="grid-item" style={{width: 492, height:300}}  src="img/san-fransisko.jpg"alt="foture"/> 
      <img  ClassName="grid-item" style={{width:346 , height:300}}  src="img/ispaniya.jpg"alt="foture"/> 
    </div>
    <Link to="/catalog" > <button> cataloga otish </button> </Link>
 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
          {/* <Divider orientation="left">Align Middle</Divider> */}
    {/* <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>   <img className=" country-grid__img" src="img/istanbul.jpg" alt=""  /> </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>   <img  className=" country-grid__img" src="img/rim.jpg" alt=""  /> </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>   <img className="country-grid__img" src="img/london.jpg" alt=""  /> </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}><img className="country-grid__img" src="img/dubai.jpg"  alt="duabi"/></DemoBox>
      </Col>
    </Row>


    {/* <Divider orientation="left">Align Bottom</Divider> */}
    {/* <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}><img className=" country-grid__img" src="img/moskva-large.jpg"  alt=""/></DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}><img className=" country-grid__img" src="img/milano-middle.jpg"  alt="roma"/></DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}> <img className="country-grid__img" src="img/korea.jpg" alt="korea"  />  </DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}><img className=" country-grid__img" src="img/singopur-large.jpg" alt="singapore"/></DemoBox>
      </Col>
    </Row> */} 
    </div>
    // </div>
    
    
    );
};
export default CountryGrid;

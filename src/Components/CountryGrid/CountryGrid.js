import React from 'react';
import css from './countrygrid.css'
// import {Link} from 'react';
import { Row, Col, Divider } from 'antd';



const CountryGrid = () => {
    const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
  
    return (<div>
          <Divider orientation="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    </div>
    
        // <div className="CountryGrid">
        //     <h3>Find by Country</h3>
        //     <div className="grid-container" >        
        //     <img className="grid-item country-grid__img" src="img/dubai.jpg"  alt="duabi" /> 
        //     <img style={{height: 310 , objectFit: 'cover' }} className="grid-item country-grid__img" src="img/istanbul.jpg" alt=""  /> 
        //     <img className="grid-item country-grid__img " src="img/london.jpg" alt="london "  /> 
        //     <img className="grid-item country-grid__img" src="img/korea.jpg" alt="korea"  /> 
        //     <img className="grid-item country-grid__img" src="img/parij.jpg" alt="parij"  />
        //     <img className="grid-item country-grid__img" src="img/rim.jpg" alt="roma"  /> 
        //    </div>
        // </div>
    );
};
export default CountryGrid;

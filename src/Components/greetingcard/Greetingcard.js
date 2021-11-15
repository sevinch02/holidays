import React from 'react'
import {useState} from "react";
import './greetingcard.css'

const Greetingcard = () => {

  const [image,
    setImage] = useState('');
  const [name,
    setName] = useState('');
  const [description,
    setdescription] = useState('');
  // const [price,setprice]= useState('');
  const [form,
    setFrom] = useState('');
  const [mesage,
    setMesage] = useState('');
  return (
    <div className="container12"> 
    <div className="greetingcard-content">
      <h2>
        Greetingcard for your dears
      </h2>

      {/* onSubmit={handleSubmit}  */}

      <form className="from">
        <div className="from-card">
          <label className="label-text" for="image">Choose image</label>
          <input
            className="input"
            type="file"
            id="image"
            accept={image}
            onChange={(e) => {
            setImage( e.target.value)
          }}/>
          <br></br>
          <label className="label-text" for="name">Card Title:</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
            setName(e.target.value)
          }}/>
          <br></br>

          <br></br>
          <label className="label-text" for="description">Message:</label>
          <textarea
            className="input"
            type="textarea"
            id="description"
            value={mesage}
            onChange={(e) => {
            setMesage(e.target.value)
          }}/>
          <br/>
          <label className="label-text" for="from">From</label>
          <input
            className="input"
            type="text"
            id="quanity"
            value={form}
            onChange={(e) => {
            setFrom(e.target.value)
          }}/>
        </div>
        <div className="greatingcard-frontend">
          <div className="greetingcard-content-text">
            <h3 className="greatingcard-frontend__title">
              {name}</h3>
            <div className="greatingcard-frontend__text">
              <h2 className="greatingcard-frontend__text_message">
                {mesage}
              </h2>
            </div>
            <p className="greetingcard-content__form">
            {' with love ' +form }
          </p>  
          </div>
         
        </div>
        <div className="greetingcard-content-img" >
          <img id="image" src={image} alt=""/> {/* <br></br> */}
        </div>
      </form>
      <button type="submit" className="add-btn">save card</button>
    </div>
    </div>  
  );
};

export default Greetingcard;

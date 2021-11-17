import React from 'react'
import {useState, useRef} from "react";
import './greetingcard.css'

const Greetingcard = () => {

  const [image,
    setImage] = useState('');
  const [name,
    setName] = useState('');

  const [form,
    setFrom] = useState('');
  const [mesage,
    setMesage] = useState('');

  const contentRef = useRef();
  const [file,
    setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contentRef.current.value)
  }
  return (
    <div className="container12">
      <div className="greetingcard-content">
        <h2>
          Build Your Own Holiday Cards</h2>

        <form className="from" onSubmit={handleSubmit}>
         
          <div className="from-card">
            <div>
              <label className="label-text" for="name">Card Title:</label>
              <input className="input" placeholder="Title" type="text" 
               id="title"
               value={name}
               onChange={(e) => {
               setName(e.target.value)
               }}/>
               
              <br></br>
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
            <div className="from-card__message">
              <label className="label-text" for="description">Message:</label>
              <textarea
                className="input"
                type="textarea"
                id="description"
                value={mesage}
                required
                placeholder="Write your wishes"
                onChange={(e) => {
                setMesage(e.target.value)
              }}/>
               <label htmlFor="file" className="greetingcard__img">
            <span className="greetingcard__img_text">Add photo</span>
            <input
              style={{
              display: 'none'
            }}
              type="file"
              id="file"
              accept=".png, .JPG, .jpeg"
              onChange={(e) => {
              setFile(e.target.files[0])
            }}/>
          </label> <br/>
          <button type="button" className="add_btn">save card</button>
            </div>
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
                {' with love ' + form}
              </p>

            </div>
            {file && (
              <div className="">
                <img src={URL.createObjectURL(file)} alt="" className="greeting__preview_image"/>
                <span onClick={() => setFile(null)}>
                  {/* Change img */}
                </span>
              </div>
            )} 
          </div>
      
        </form>
       
      </div>
    </div>
  );
};

export default Greetingcard;

import React from 'react'
import { useState} from "react";
import './greetingcard.css'


const Greetingcard = () => {
 
    const [image,setImage] =useState('');
    const [name,setname]= useState('');
    const [description,setdescription]= useState('');
    // const [price,setprice]= useState('');
    const [from, setfrom]= useState('');
    const [mesage,setmesage]= useState('');
    return (
        <div>
            <h2>my Greetingcard card</h2>
          
            {/* onSubmit={handleSubmit}  */}
            <div className="row">
                <form className="from" >
                    <label className="label-text" for="image">Choose image</label> 
                    <input className="input" type="file" id="image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                <br></br>
                <label className="label-text" for="name">Card Title:</label>
                    <input className="input" type="text" id="name" value={name} onChange={(e) => {setname(e.target.value)}}/>
                <br></br>
                <label className="label-text" for="from">From</label>
                    <input className="input" type="text" id="quanity" value={from} onChange={(e) => {setfrom(e.target.value)}}/>
                <br></br>  
                <label className="label-text" for="description">Message:</label>
                    <textarea className="input" type="textarea" id="description" value={mesage} onChange={(e) => {setmesage(e.target.value)}}/>
                <br></br>
                {/* <input type="search" /> */}
                <button type="submit" className="add-btn">save card</button>
                </form>
            </div>
        </div>
    );
};

export default Greetingcard;

import React from 'react'
import { useState} from "react";


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
            <div className="">
            <div className="container">
            {/* onSubmit={handleSubmit}  */}
                
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
                    <input className="input" type="text" id="description" value={mesage} onChange={(e) => {setmesage(e.target.value)}}/>
                <br></br>
                <button type="submit" className="add-btn">save card</button>
                </form>
            </div>
        </div>
           
        </div>
    )
}

export default Greetingcard;

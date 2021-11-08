import React from 'react';
import { useState } from 'react';
import './Login.css';
import SignupForm from './SignupForm';
import SignupFromSuccess from './SignupFromSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] =useState(false);
    const submitFrom = (submitFrom) =>{
        setFormIsSubmitted(true);
    }; 
    return (
     <div>  {!formIsSubmitted ? <SignupForm submitFrom={submitFrom}/> : 
    ( <SignupFromSuccess/> )} 
     </div>
    );
};

export default Form;

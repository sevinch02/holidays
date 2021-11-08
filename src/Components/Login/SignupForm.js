import React from 'react';
import Usefrom from './Useform';
 
const SignupForm = ({submitFrom}) => {

    const [handleChange, handleFormSubmit,values,errors] = Usefrom(submitFrom);

    return (
        <div className="container" >
            <div className="app-wrapper" >
                <div>
                    <h2 className="title" >Create Account</h2>
                </div>
                <form>
                    <div className="name" >
                        <label className="label" > Full name</label>
                        <input  className="input"  type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                  {errors.fullname && <p className="error">{error.fullname}</p>}
                    </div>
                    <div className="email" >
                        <label className="label" >  </label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                   
                        {errors.email && <p className="error">{error.email}</p>}
                    </div>
                    <div className="password" >
                        <label className="label" >password</label>
                        <input  className="input"  type="password"  name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <p className="error">{error.password}</p>}
                  
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                    </div>
                </form>

            </div>
         
        </div>
    );
};

export default SignupForm;

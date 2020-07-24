import React from 'react';
import logo from '../assets/logo.png'

const Welcome = ({setSignUp, setSignIn}) => {
  return (
    <React.Fragment>
      <div className="mt-5 px-4">
        <img className="img-fluid mt-1" src={logo} alt="infinity-war-logo"/>
      </div>
         
      <div className="buttons w-100 px-2">
        <h4 className="text-white text-center title-logo">Sign in to access the character library of Avengers Infinity War.</h4>
        <button type="button" className="btn btn-outline-primary mt-5 btn-lg btn-block" onClick={() => setSignIn(true)}>Sign In</button>
        <button type="button" className="btn btn-outline-danger mt-5 btn-lg btn-block" onClick={() => setSignUp(true)}>Sign Up</button>
      </div>
    </React.Fragment>
    );
}
 
export default Welcome;
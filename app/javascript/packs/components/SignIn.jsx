import React from 'react';
import axiosCalls from "../services/axiosCalls";
import Error from "./Error";
import logo from '../assets/logo.png'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogIn } from "../actions/index.js";
import PropTypes from 'prop-types';


const SignIn = ({setSignUp, setSignIn}) => {

  let history = useHistory();

  const dispatch = useDispatch();


  const [userForm, setUserForm] = React.useState({
    email: "",
    password: "",
  });

  const signUp = () => {
    setSignUp(true)
    setSignIn(false)
  }

  const [error, setError] = React.useState({
    value: false,
    data: "",
  });

  const SetError = (value, data) => {
    setError({
      value: value,
      data: data,
    });
  };

  const HandleForm = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = userForm;

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      SetError(true, "empty field");
      return;
    }

    axiosCalls.logIn(email, password )
      .then((response) => {
        if (response.data.logged_in === true) {
          console.log(response)
          dispatch(LogIn(response.data.user));
          history.push("/library");
        } else {
          SetError(true, response.data.error);
        }
      })
      .catch((error) => {});
  };


  return (
    <React.Fragment>
       
      <div className="mx-3 mt-5 py-4 border border-success rounded">
        
        <form onSubmit={HandleSubmit} className="mx-4">
          <h1 className="text-white text-center">Sign In</h1>
            <div className="form-group">
              <label className="text-white" htmlFor="inputEmail">Email address</label>
              <input
                onChange={HandleForm}
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                required
              />
            </div>

            <div className="form-group">
              <label className="text-white" htmlFor="password">Password</label>
              <input
                onChange={HandleForm}
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                required
                minLength="6"
              />
            </div>

            <div>
              <button
                data-testid="SubmitLoginButton"
                type="submit"
                className="btn w-100 btn-outline-success rounded-pill py-1 px-3 mr-3 mb-2"
              >
                Submit
              </button>

              <div className="text-white">
                <small>Did you don't have an account?</small> <small className="font-weight-bold click-here" onClick={signUp}>Click here</small>
              </div>

              {error.value ? <Error error={error.data} /> : null}
            </div>
        </form>
      </div>

      <div className="logo-sign px-4">
        <img className="img-fluid mt-1" src={logo} alt="infinity-war-logo"/>
      </div>
    </React.Fragment>
    );
}
 

Error.propTypes = {
  setSignUp: PropTypes.func.isRequired,
  setSignIn: PropTypes.func.isRequired,
};

export default SignIn;
import React from 'react';
import axiosCalls from "../services/axiosCalls";
import Error from "./Error";
import logo from '../assets/logo.png'

const SignUp = ({setSignUp, setSignIn}) => {

  const [userForm, setUserForm] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const signIn = () => {
    setSignUp(false)
    setSignIn(true)
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

  const { email, password, passwordConfirmation, name } = userForm;

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirmation.trim() === "" ||
      name.trim() === ""
    ) {
      // SetError(true, "empty field");
      return;
    } else if (password.length < 6) {
      SetError(true, "password need to have 6 characters");
      return;
    } else if (password !== passwordConfirmation) {
      SetError(true, "passwords don't match");
      return;
    } else {
      SetError(false, "");
    }

    axiosCalls.signUp(email, password, passwordConfirmation, name)
      .then((response) => {
        if (response.data.status === "created") {
          // dispatch(LogIn(response.data.user));
          // history.push("/dashboard");
        } else {
          const data = response.data.error;
          const keys = Object.keys(data);
          const errorMessage = keys.map((key) => {
            return key + " " + data[key].toString();
          });
          SetError(true, errorMessage);
        }
      })
      .catch((error) => {});
  };

  return (
    <React.Fragment>
       
      <div className="mx-3 mt-1 py-2 border border-primary rounded">
        
        <form onSubmit={HandleSubmit} className="mx-4">
          <h1 className="text-white text-center m-0">Sign Up</h1>

          <div className="form-group">
            <label className="text-white" htmlFor="name">Name</label>
            <input
              onChange={HandleForm}
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              required
              />
          </div>

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

          <div className="form-group">
            <label className="text-white" htmlFor="passwordConfirmation">
              Password Confirmation
            </label>
            <input
              onChange={HandleForm}
              type="password"
              className="form-control"
              id="passwordConfirmation"
              name="passwordConfirmation"
              value={passwordConfirmation}
              required
              minLength="6"
              />
          </div>

          <div>
            <button
              data-testid="SubmitLoginButton"
              type="submit"
              className="btn w-100 btn-outline-primary rounded-pill py-1 px-3 mr-3 mb-2"
              >
                Submit
            </button>

            <div className="text-white">
              <small>Did you have an account?</small> <small className="font-weight-bold click-here" onClick={signIn}>Click here</small>
            </div>
            {error.value ? <Error error={error.data} /> : null}
          </div>
        </form>
      </div>

      <div className="logo-signUp px-4">
        <img className="img-fluid mt-1" src={logo} alt="infinity-war-logo"/>
      </div>
    </React.Fragment>
    );
}
 
export default SignUp;
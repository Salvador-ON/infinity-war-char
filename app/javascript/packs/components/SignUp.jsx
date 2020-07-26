import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { LogIn, ChangeFilter } from '../actions/index';
import axiosCalls from '../services/axiosCalls';
import Error from './Error';
import logo from '../assets/logo.png';

const SignUp = ({ setSignUp, setSignIn }) => {
  const dispatch = useDispatch();

  const [userForm, setUserForm] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const signIn = () => {
    setSignUp(false);
    setSignIn(true);
  };

  const [error, setError] = React.useState({
    value: false,
    data: '',
  });

  const SetError = (value, data) => {
    setError({
      value,
      data,
    });
  };

  const HandleForm = e => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const {
    email, password, passwordConfirmation, name,
  } = userForm;

  const HandleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  const HandleSubmit = e => {
    e.preventDefault();

    if (
      email.trim() === ''
      || password.trim() === ''
      || passwordConfirmation.trim() === ''
      || name.trim() === ''
    ) {
      SetError(true, 'empty field');
      return;
    } if (password.length < 6) {
      SetError(true, 'password need to have 6 characters');
      return;
    } if (password !== passwordConfirmation) {
      SetError(true, "passwords don't match");
      return;
    }
    SetError(false, '');

    axiosCalls.signUp(email, password, passwordConfirmation, name)
      .then(response => {
        if (response.data.status === 'created') {
          dispatch(LogIn(response.data.user));
          dispatch(ChangeFilter(response.data.filter.status));
        } else {
          const data = response.data.error;
          const keys = Object.keys(data);
          const errorMessage = keys.map(key => `${key} ${data[key].toString()}`);
          SetError(true, errorMessage);
        }
      })
      .catch(error => {
        SetError(true, String(error));
      });
  };

  return (
    <>

      <div className="mx-3 mt-1 py-2 border border-primary rounded">

        <form onSubmit={HandleSubmit} className="mx-4">
          <h1 className="text-white text-center m-0">Sign Up</h1>

          <div className="form-group">
            <label className="text-white d-block" htmlFor="name">
              Name
              <input
                onChange={HandleForm}
                onKeyPress={HandleEnter}
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                required
              />
            </label>

          </div>

          <div className="form-group">
            <label className="text-white d-block" htmlFor="inputEmail">
              Email address
              <input
                onChange={HandleForm}
                onKeyPress={HandleEnter}
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                required
              />
            </label>

          </div>

          <div className="form-group">
            <label className="text-white d-block" htmlFor="password">
              Password
              <input
                onChange={HandleForm}
                onKeyPress={HandleEnter}
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                required
                minLength="6"
              />
            </label>

          </div>

          <div className="form-group">
            <label className="text-white d-block" htmlFor="passwordConfirmation">
              Password Confirmation
              <input
                onChange={HandleForm}
                onKeyPress={HandleEnter}
                type="password"
                className="form-control"
                id="passwordConfirmation"
                name="passwordConfirmation"
                value={passwordConfirmation}
                required
                minLength="6"
              />
            </label>

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
              <small>Did you have an account?</small>
              <small role="button" className="font-weight-bold click-here" onClick={signIn} onKeyDown={signIn} tabIndex={0}>Click here</small>
            </div>
            {error.value ? <Error error={error.data} /> : null}
          </div>
        </form>
      </div>

      <div className="logo-signUp px-4">
        <img className="img-fluid mt-1" src={logo} alt="infinity-war-logo" />
      </div>
    </>
  );
};

SignUp.propTypes = {
  setSignUp: PropTypes.func.isRequired,
  setSignIn: PropTypes.func.isRequired,
};

export default SignUp;

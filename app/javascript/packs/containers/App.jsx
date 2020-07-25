import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Landing from './Landing';
import Library from './Library';
import axiosCalls from '../services/axiosCalls';
import { LogIn, LogOut } from '../actions/index';

const App = () => {
  const user = useSelector(state => state.loggedInStatus);

  const dispatch = useDispatch();

  const checkLoginSatus = () => {
    axiosCalls.checkLogged()
      .then(response => {
        if (
          response.data.logged_in
          && user.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          dispatch(LogIn(response.data.user));
        } else if (
          !response.data.logged_in
          && user.loggedInStatus === 'LOGGED_IN'
        ) {
          dispatch(LogOut());
        }
      })
      .catch(error => {});// eslint-disable-line no-unused-vars
  };

  useEffect(() => {
    checkLoginSatus();
  }, []);

  return (
    <>
      {user.loggedInStatus === 'NOT_LOGGED_IN' ? <Landing /> : <Library />}
    </>
  );
};

export default App;

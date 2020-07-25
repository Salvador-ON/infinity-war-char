import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogOut } from '../actions/index';
import axiosCalls from '../services/axiosCalls';

const Library = () => {
  const user = useSelector(state => state.loggedInStatus);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    axiosCalls.Logout()
      .then(response => {
        if (response.data.logged_out) {
          dispatch(LogOut());
        }
      })
      .catch(error => {}); // eslint-disable-line no-unused-vars
  };
  return (
    <>
      <h1>library</h1>
      {user.loggedInStatus === 'LOGGED_IN' ? (
        <button
          type="button"
          className=""
          onClick={handleLogOut}
        >
          Log Out
        </button>
      ) : null}
    </>

  );
};

export default Library;

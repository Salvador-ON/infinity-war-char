import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Landing from './Landing';
import Library from './Library';
import axiosCalls from '../services/axiosCalls';
import { LogIn, LogOut, ChangeFilter } from '../actions/index';

const App = () => {
  const user = useSelector(state => state.loggedInStatus);

  const [getInfo, setGetInfo] = React.useState(false);

  const dispatch = useDispatch();

  const checkLoginSatus = () => {
    axiosCalls.checkLogged()
      .then(response => {
        setGetInfo(true);
        if (
          response.data.logged_in
          && user.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          dispatch(LogIn(response.data.user));
          dispatch(ChangeFilter(response.data.filter.status));
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
      {user.loggedInStatus === 'LOGGED_IN' && getInfo ? <Library /> : null}
      {user.loggedInStatus === 'NOT_LOGGED_IN' && getInfo ? <Landing /> : null}
    </>
  );
};

export default App;

import React from 'react';
import Landing from './Landing'
import Library from './Library'
import axiosCalls from "../services/axiosCalls";
import { LogIn } from "../actions/index.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const user = useSelector((state) => state.loggedInStatus);

  const dispatch = useDispatch();

  const checkLoginSatus = () => {
    axiosCalls.checkLogged()
      .then((response) => {
        console.log(response.data)
        if (
          response.data.logged_in &&
          user.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          dispatch(LogIn(response.data.user));
        } else if (
          !response.data.logged_in &&
          user.loggedInStatus === "LOGGED_IN"
        ) {
          dispatch(LogOut());
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    checkLoginSatus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <React.Fragment>
      {user.loggedInStatus === "NOT_LOGGED_IN" ? <Landing/> : <Library/>}
    </React.Fragment>
  )
    
    
};

export default App;

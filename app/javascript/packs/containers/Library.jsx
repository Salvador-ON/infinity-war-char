import React from 'react';
import { LogOut } from "../actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import axiosCalls from "../services/axiosCalls";

const Library = () => {

  const user = useSelector((state) => state.loggedInStatus);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    axiosCalls.Logout()
      .then((response) => {
        if (response.data.logged_out) {
          dispatch(LogOut());
        }
      })
      .catch((error) => {});
  };
  return ( 
    <React.Fragment>
      <h1>library</h1>
      {user.loggedInStatus === "LOGGED_IN" ? (
          <span
            className=""
            onClick={handleLogOut}
          >
            Log Out
          </span>
        ) : null}
    </React.Fragment>
    
   );
}
 
export default Library;
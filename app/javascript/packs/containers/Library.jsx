import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LogOut } from '../actions/index';
import axiosCalls from '../services/axiosCalls';
import NavBar from '../components/NavBar';

const Library = () => {
  const user = useSelector(state => state.loggedInStatus);

  const dispatch = useDispatch();

  
  return (
    <React.Fragment>
      <NavBar/>
      <h1>library</h1>
      
    </React.Fragment>

  );
};

export default Library;

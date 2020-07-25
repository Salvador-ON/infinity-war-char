import { combineReducers } from 'redux';
import loggedInStatus from './loggedInStatus';
import heroesData from './heroesData';
import filter from './filter';


const allReducers = combineReducers({
  loggedInStatus,
  heroesData,
  filter
});

export default allReducers;

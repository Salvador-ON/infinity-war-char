import axios from 'axios';
const token = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return token;
}

const logOut = () => (
  axios
    .delete('/logout', {
      headers: {
      "X-CSRF-Token": token()}}, {
      withCredentials: true,})
);


const logIn = (email, password) => (
  axios
    .post(
      '/signin',
      {user: {
       email,
       password}},
      {headers: {
        "X-CSRF-Token": token()}},
      {withCredentials: true})
);

const signUp = (email, password, passwordConfirmation, name) => (
  axios
    .post(
      '/signup',
      {user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
        name}},
      {headers: {
      "X-CSRF-Token": token()}},
      {withCredentials: true})
);

const checkLogged = () => (
  axios
    .get('/logged_in', { withCredentials: true})
);

const updateFilter = (filterId, status) => (
  axios
    .put(
      `/filters/${filterId}`,
      {filter: {status}},
      {headers: {
      "X-CSRF-Token": token()}},
      {withCredentials: true})
);

const getHeroes = () => (
  axios
    .get('/heroes', { withCredentials: true})
);

const axiosCalls = {
  logOut,
  logIn,
  signUp,
  checkLogged,
  updateFilter,
  getHeroes,
};

export default axiosCalls;
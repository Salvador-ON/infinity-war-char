import axios from 'axios';
const token = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return token;
}

const Logout = () => (
  axios
    .delete('/logout', {
      headers: {
      "X-CSRF-Token": token()}}, {
      withCredentials: true,}));


const logIn = (email, password) => (
  axios
    .post(
      '/signin',
      {user: {
       email,
       password}},
      {headers: {
        "X-CSRF-Token": token()}},
      {withCredentials: true}
    ));

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
      {withCredentials: true}));

const checkLogged = () => (
  axios
    .get('/logged_in', { withCredentials: true})
);

const axiosCalls = {
  Logout,
  logIn,
  signUp,
  checkLogged,
};

export default axiosCalls;
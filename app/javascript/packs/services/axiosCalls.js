import axios from 'axios';

const Logout = () => (
  axios
    .delete('/logout', {
      withCredentials: true,
    })
);


const logIn = (email, password) => (
  axios
    .post(
      '/signin',
      {
        user: {
          email,
          password,
        },
      },
      { withCredentials: true },
    )
);

const signUp = (email, password, passwordConfirmation, name) => (
  axios
    .post(
      '/signup',
      {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
          name,
          token: '',
        },
      },
      { withCredentials: true },
    )
);

const checkLogged = () => (
  axios
    .get('/logged_in', {
      withCredentials: true,
    })
);

const axiosCalls = {
  Logout,
  logIn,
  signUp,
  checkLogged,
};

export default axiosCalls;

// import axios from 'axios';

// const ApposDashboard = dateSearch => (
//   axios.get(`http://localhost:3001/dashboard?date=${dateSearch}`, {
//     withCredentials: true,
//   }));

// const FormServices = (name, description, price, url, shedules) => (
//   axios
//     .post(
//       'http://localhost:3001/services',
//       {
//         service: {
//           name,
//           description,
//           price,
//           image_url: url,
//           schedule: shedules.toString(),
//         },
//       },
//       { withCredentials: true },
//     )
// );

// const Logout = () => (
//   axios
//     .delete('http://localhost:3001/logout', {
//       withCredentials: true,
//     })
// );

// const FormAppoinments = (date, time, serviceOpen, petName) => (
//   axios
//     .post(
//       'http://localhost:3001/appointments',
//       {
//         appointment: {
//           date,
//           time,
//           service_id: serviceOpen.data.id,
//           pet_name: petName,
//         },
//       },
//       { withCredentials: true },
//     )
// );

// const AvailableHours = (serviceOpen, valueDate) => (
//   axios
//     .get(
//       `http://localhost:3001/availables?service_id=${
//         serviceOpen.data.id
//       }&date=${
//         valueDate}`,
//       {
//         withCredentials: true,
//       },
//     )
// );

// const showServices = () => (
//   axios
//     .get('http://localhost:3001/services', {
//       withCredentials: true,
//     })
// );

// const deleteService = value => (
//   axios
//     .delete(`http://localhost:3001/services/${value}`, {
//       withCredentials: true,
//     })
// );

// const myAppointments = () => (
//   axios
//     .get('http://localhost:3001/appointments', {
//       withCredentials: true,
//     })
// );

// const deleteAppoinment = value => (
//   axios
//     .delete(`http://localhost:3001/appointments/${value}`, {
//       withCredentials: true,
//     })
// );

// const adminSignUp = (email, password, passwordConfirmation, phone, name, token) => (
//   axios
//     .post(
//       'http://localhost:3001/signup',
//       {
//         user: {
//           email,
//           password,
//           password_confirmation: passwordConfirmation,
//           phone: phone.replace(/-/g, ''),
//           name,
//           token,
//         },
//       },
//       { withCredentials: true },
//     )
// );

// const logIn = (email, password) => (
//   axios
//     .post(
//       'http://localhost:3001/signin',
//       {
//         user: {
//           email,
//           password,
//         },
//       },
//       { withCredentials: true },
//     )
// );

// const signUp = (email, password, passwordConfirmation, phone, name) => (
//   axios
//     .post(
//       'http://localhost:3001/signup',
//       {
//         user: {
//           email,
//           password,
//           password_confirmation: passwordConfirmation,
//           phone: phone.replace(/-/g, ''),
//           name,
//           token: '',
//         },
//       },
//       { withCredentials: true },
//     )
// );

// const checkLogged = () => (
//   axios
//     .get('http://localhost:3001/logged_in', {
//       withCredentials: true,
//     })
// );

// const axiosCalls = {
//   ApposDashboard,
//   FormServices,
//   Logout,
//   FormAppoinments,
//   AvailableHours,
//   showServices,
//   deleteService,
//   myAppointments,
//   deleteAppoinment,
//   adminSignUp,
//   logIn,
//   signUp,
//   checkLogged,
// };

// export default axiosCalls;

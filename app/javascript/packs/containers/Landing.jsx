import React from 'react';
import banner from '../assets/banner.jpg';
import Welcome from '../components/Welcome';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Landing.css';

const Landing = () => {
  const [signUp, setSignUp] = React.useState(false);
  const [signIn, setSignIn] = React.useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 bg-blk px-0" style={{ height: '100vh' }}>
          {!signIn && !signUp ? <Welcome setSignUp={setSignUp} setSignIn={setSignIn} /> : null }
          {signIn ? <SignIn setSignUp={setSignUp} setSignIn={setSignIn} /> : null }
          {signUp ? <SignUp setSignUp={setSignUp} setSignIn={setSignIn} /> : null }

        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <div className="banner" style={{ height: '100vh', background: `url(${banner})`, backgroundSize: 'cover' }} />
          <img className="d-none" src={banner} alt="banner"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;

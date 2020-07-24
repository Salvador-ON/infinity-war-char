import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Landing.css";
import banner from '../assets/banner.jpg';
import Welcome from '../components/Welcome';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Landing = () => {

  const [signUp, setSignUp] = React.useState(false)
  const [signIn, setSignIn] = React.useState(false)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 bg-blk px-0">
          {!signIn && !signUp ? <Welcome setSignUp={setSignUp} setSignIn={setSignIn}/> :null }
          {signIn  ? <SignIn setSignUp={setSignUp} setSignIn={setSignIn}/> :null }
          {signUp  ? <SignUp setSignUp={setSignUp} setSignIn={setSignIn}/> :null }

        </div>
        <div className="col-8 p-0">
            <div className="banner" style={{height: "100vh", background: `url(${banner})`, backgroundSize: "cover"}}></div>
        </div>
      </div>
    </div>
    );
}
 
export default Landing;
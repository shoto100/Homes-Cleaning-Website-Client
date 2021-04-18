import './Login.css'
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "firebase/auth";
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from './loginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';


function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [ loggedInUser, setLoggedInUser ] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
  
  return (
    <div className="">
        <Navbar></Navbar>
        <div className="form-wrapper text-center">
        <div onClick={googleSignIn} className="use-google">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h1 className="text-primary" style={{marginLeft: '100px', fontSize: '48px'}}>
                <FontAwesomeIcon icon={faGoogle} />
                </h1>
              </div>
              <div className="col-md-10">
                <h6 style={{marginTop: '15px', fontSize: '20px'}}>Sign in with Google</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{display: "flex", justifyContent: "center"}}>
            <small>Don't have a account? <a href="">Create an account</a></small> 
      </div>
    </div>
  );
}

export default Login;
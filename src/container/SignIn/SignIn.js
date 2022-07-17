import React from 'react'
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInBody from "../../components/SignInBody/SignInBody";
import { useAuth0 } from '@auth0/auth0-react';



function SignIn() {

  const {loginWithRedirect} = useAuth0();
  
  return (
    
    <div 
    >
     
      <Navbar/>
      {/* <SignInBody /> */}
      <div className="login_button_container">
      <button className="loginbutton" onClick={()=>{loginWithRedirect()}} >Login In</button>
      </div>
      

    </div>
  );
}

export default SignIn;

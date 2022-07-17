import React from 'react'
import "./LandingPageContent.css";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Navbar from '../Navbar/Navbar';



function LandingPageContent() {

  const { user, loginWithRedirect } = useAuth0();


  const goToSignInPage = () => {
    // navigate("/sign-in");
    loginWithRedirect();
  };


  return (
    <div className="lbody">
      <Navbar goToSignInPage={true}/>
      <div className="landingpagecontent_container"
    
    style={{
      backgroundImage:
        'url("http://wallpapercave.com/wp/iUmIrGM.jpg")',
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
    >
        <p className="landingpagecontent_title"> Web series, Tv shows, Films and more</p>
        <p className="landingpagecontent_subtitle">watch from your comfort</p>
        <p className="landingpagecontent_description"> Ready to explore? Enter your email for membership</p>
        <div className="landingpagecontent_input">
            <input type="text"/>
            {/* <Link to="/sign-in">
            <button className="landingpagecontent_button">GET STARTED</button>
            </Link>
       */}
 <button className="landingpagecontent_button"  onClick={goToSignInPage}>GET STARTED</button>


            </div>

    </div>

    </div>
    
            
  );
}

export default LandingPageContent;
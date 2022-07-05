import React from 'react'
import "./LandingPageContent.css";
import {Link} from "react-router-dom";

function LandingPageContent() {
  return (
    <div className="landingpagecontent_container">
        <p className="landingpagecontent_title"> Web series, Tv shows, Films and more</p>
        <p className="landingpagecontent_subtitle">watch from your comfort</p>
        <p className="landingpagecontent_description"> Ready to explore? Enter your email for membership</p>
        <div className="landingpagecontent_input">
            <input type="text"/>
            <Link to="/sign-in">
            <button className="landingpagecontent_button">GET STARTED</button>
            </Link>
            </div>
     
    </div>
  )
}

export default LandingPageContent

import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth0 } from "@auth0/auth0-react";
import SearchIcon from '@mui/icons-material/Search';



function Navbar({Searchbox, showSignInButton, logOut, show }) {

 const { user, loginWithPopup } = useAuth0();

  const { logout } = useAuth0();
  //const navigate = useNavigate();


  const [dark, setDark] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      //cleanup function
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const goToSignInPage = () => {
    // navigate("/sign-in");
    loginWithPopup();
  };
  return (
    <div
      className={`navbar_container ${show && "navbar_color"} ${
        dark && "navbar_dark"
      }`}
    >
      <img
        className="navbar_logo"
        src="https://tse2.mm.bing.net/th?id=OIP.zpAc9InFlSAz-Nw2KHY5ZwHaFj&pid=Api&P=0&w=242&h=181"
        alt="Logo"
      />
      {/* <Link to="/sign-in">
        <button className="navbar_button">Sign In</button>
      </Link> */}
      {showSignInButton === false ? (
        " "
      ) : (
        <button className="navbar_button" onClick={goToSignInPage}>
          Sign In
        </button>
      )}
      


    
        
      

      
      {logOut && (
        <>
          <h4 className="user_name"> {user && `Hi ${user.name}`} </h4>
          <p
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
            className="navbar_icon"
          >
            <PersonIcon />
          </p>
          <input className="searchbox" type="text" placeholder="Search"/>
          <p className="searchbox_icon">
            <SearchIcon/>
          </p>

        </>
      )}
    </div>
  );
}

export default Navbar;
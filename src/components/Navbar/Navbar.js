import React, {useState, useEffect} from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

function Navbar({showSignInButton, logout, show}) {
  const[dark, setDark] = useState(false);

  const transitionNavBar =() => {
    if(window.scrollY> 100){
      setDark(true);
    }else{
      setDark(false);
    }
  };

  useEffect (() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    }
  }, []);





  return (
    <div className={`navbar_container ${show && "navbar_color"} ${dark && "navbar_dark"}`} >
        <img className="navbar_logo" src="https://tse2.mm.bing.net/th?id=OIP.zpAc9InFlSAz-Nw2KHY5ZwHaFj&pid=Api&P=0&w=242&h=181 " alt="logo"/>
       {showSignInButton === false ? (
        " "
       ) : (
        <Link to="/sign-in">
        <button className="navbar_button"  > Sign In </button>
        </Link>
       )}
       
      { logout && <p className="navbar_icon"><PersonIcon/></p>}
       
      
    </div>
  )
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icom from "../../assets/caret_icon.svg"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
          <ul>
            <li>Inicio</li>
            <li>TVShows</li>
            <li>Peliculas</li>
            <li>Nuevo & Populares</li>
            <li>Mi Lista</li>
            <li>Por Lenguajes</li>
          </ul>
      </div>
      <div className="navbar-right">
         <img src={search_icon} alt=""className="icons" />
           <p>p</p>
        <img src={bell_icon} alt="" className="icons" />
          <div className="navbar-profile">
            <img src={profile_img} alt=""className="profile" />
            <img src={caret_icom}  />
            <div className="dropdown">
                <p>Registrate a Netflix</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icom from "../../assets/caret_icon.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h4>Capflix</h4>
          <ul>
            <Link className="a1" to="/peliculas" >Inicio</Link>
            <Link className="a1" to="/tvshows" >TvShows</Link>
            <Link className="a1"to="/videopelicula" >Peliculas</Link>
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
            <div className="dropdown">
                <button>Registrate a Netflix</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;

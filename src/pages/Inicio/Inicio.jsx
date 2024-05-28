import React from 'react'
import "./Inicio.css"
import Navbar from "../../components/Navbar/Navbar"
import hero from  "../../assets/hero_banner.jpg"
const Inicio = () => {
  return (
    <div className='inicio'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt=""  className='banner-img'/>
      </div>
    </div>
      
  )
}

export default Inicio
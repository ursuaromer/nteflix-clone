import React from 'react'
import './Inicio.css'
import Navbar from '../../components/Navbar/Navbar'
// import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
    return (
        <div className='home'>
          <Navbar/>
          <div className='home'>
             <img src="https://hips.hearstapps.com/hmg-prod/images/rebel-moon-1674637294.jpg?crop=0.9376465072667604xw:1xh;center,top&resize=1200:*" alt="" className='banner-img'/>
             <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img'/>
                <p>Un joven habitante de la moderna Estambul descubre sus lazos con una antigua orden secreta y se dispone a salvar a su ciudad de un enemigo inmortal.</p>
                <div className="hero-btns">
                   <button className='btn'><img src={play_icon} alt="" />Play</button>
                   <button className='btn dark-btn'><img src={info_icon} 
                   alt="" />Mas Información</button>
                </div>
                <TitleCards/>
             </div>
          </div>
          <div className="more-cards">
          <TitleCards title={"Sensaciones"} />
          <TitleCards title={"Ahora"}/>
          <TitleCards title={"Estrenos"}/>
          <TitleCards title={"Pedidos"}/>
          </div>
          <Footer/>
        </div>
    )
}

export default Home
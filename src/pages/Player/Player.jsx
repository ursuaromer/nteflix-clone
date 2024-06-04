import React from 'react'
import "./Player.css"
import Navbar from '../../components/Navbar/Navbar'
import Video from './data'
import ReactPlayer from 'react-player'
const Player = () => {
  return (
    <div className='player'>
      <Navbar></Navbar>
      {
        Video.map((video)=>(
          <div className='player-reproduce'>
            {/* <h3>{video.nombre}</h3> */}
            <ReactPlayer className="play-intro" url={video.url}></ReactPlayer>
          </div>
        ))
      }
    </div>
    
  )
}

export default Player
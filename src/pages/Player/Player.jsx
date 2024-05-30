import React from 'react'
import "./Player.css"
import Navbar from '../../components/Navbar/Navbar'
import Video from './data'
import ReactPlayer from 'react-player'
const Player = () => {
  return (
    <div className='player'>
      <Navbar></Navbar>
  <h1>TvShows</h1>
    <div>
      {
        Video.map((video)=>(
          <div>
            <h3>{video.nombre}</h3>
            <ReactPlayer url={video.url}></ReactPlayer>
          </div>
        ))
      },
      <h2>hola</h2>
    </div>
    </div>
    
  )
}

export default Player
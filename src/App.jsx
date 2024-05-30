import React from 'react'
import Inicio from "./pages/Inicio/Inicio"
import Login from './pages/Login/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Player from './pages/Player/Player'
import Peliculas from './pages/Player/Peliculas'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}/>
        <Route path="/peliculas" element={<Inicio></Inicio>}/>
        <Route path="/Tvshows" element={<Player></Player>}/>
        <Route path="/videopelicula" element={<Peliculas></Peliculas>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
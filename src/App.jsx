import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path= '/'  element={<Home/>} />
        <Route path='/video/:categoryID/:videoID' element={<video/>} />
      </Routes>
      
    </div>
  )
}


export default App

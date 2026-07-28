import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import home from './Pages/home/home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path= '/'  element={<home/>} />
        <Route path='/video/:categoryID/:videoID' element={<video/>} />
      </Routes>
      
    </div>
  )
}


export default App

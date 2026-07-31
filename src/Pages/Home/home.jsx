import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import './home.css';

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <feed/>
      </div>
    </>
  )
}

export default Home
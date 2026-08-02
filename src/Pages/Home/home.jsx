import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import './home.css';

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar Sidebar={Sidebar}/>
      <div className={`container ${Sidebar?"":'large-container'}`}>
        <feed/>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import './home.css';
import Feed from '../../Components/feed/Feed';

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : "large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
import React from "react";
import "./video.css";
import playVideo from "../../Components/playVideo/playVideo";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Recommended from "../../Components/Recommended/recommended";

const Video = () => {
  return (
    <div className='play-container'>
      <playvideo />
      <Recommended />
      <Sidebar />
    </div>
  );
};

export default Video;



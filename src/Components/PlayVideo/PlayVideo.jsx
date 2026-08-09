import React from 'react'
import './playvideo.css'
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best channel to learn coding that helps you to be a web developer</h3>

            <div className="play-video-info">
                <p>1525 views • 2 days ago</p>
                <div>
                    <span><img src={like} alt="Like" />125</span>
                    <span><img src={dislike} alt="Dislike" />25</span>
                    <span><img src={share} alt="Share" />Share</span>
                    <span><img src={save} alt="Save" />Save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} alt="" />
                <div className="channel-details">
                    <h4>Greatstack</h4>
                    <span>100K subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <h3>Description</h3>
                <p>This is a simple description of the video.</p>
                <p>Subscribe to the channel for more content!</p>
                <hr />
                <h4>130 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and services.</p>
                    </div>

                    <div className="comment-action">
                        <img src={like} alt="Like" />
                        <span>244</span>
                        <img src={dislike} alt="Dislike" />
                        <span>25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo

import React from 'react'
import './Navbar.css'
import menu_icon from 'youtube-clone/src/assets/menu.png'
import logo from 'youtube-clone/src/assets/logo.png'
import search_icon from 'youtube-clone/src/assets/search.png'
import upload_icon from 'youtube-clone/src/assess/upload.png.'
import more_icon from 'youtube-clone/src/assets/more.png'
import notification_icon from 'youtube-clone/src/assets/notification.png'
import profile_icon from 'youtube-clone/src/assets/jack.png'



const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div ClassName='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon} alt="" />
            <img className='logo' src={logo} alt="" />
    </div>

    <div className="nav-middle flex-div">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
    </div>

    <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />

    </div>


    </nav>
  )
}

export default Navbar
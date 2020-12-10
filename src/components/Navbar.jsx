import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signOut } from '../actions/index'

const NavBar = () => {
    const [user, setUser] = useState('')
  const dispatch = useDispatch()
    const logOut = () => {
        dispatch(signOut());
      };
    
      useEffect(()=>{
        setUser(localStorage.user)
      })

    console.log(user)
    return (
        <div className="navbar-section">
            <div className="top-nav-section">
                <div className="main-title-section">
                    <em><span className="main-top-left-span">Go</span><span className="main-top-right-span">Mint.net</span></em>
                </div>
                <div className="sample-page-section">
                    <span>Sample Pages</span>
                </div>
                <div className="home-top-section">
                    <span>Home</span>
                </div>
            </div>
            <div className="navigation-section">
                <div className="home-navigation-section">
                    <span>Home</span>
                </div>
                <div className="about-navigation-section">
                    <span>About Us</span>
                </div>
                <div className="vehicle-sale-nav-sectin">
                    <span>Vehicles For Sale</span>
                </div>
                <div className="history-nav-section ">
                    <span>History Update</span>
                </div>
                <div className="contact-nav-section">
                    <span>Contact</span>
                </div>
                <div className="live-chat-section">
                    <div className="chat-icon-section">
                        <i class="fas fa-user"></i>
                        <div className="chat-text-section">
                            <span>Live Chat</span>
                        </div>
                    </div>
                    {
                        user &&
                        <div className="log-out-section">
                            <button
                            onClick = { logOut }
                            >
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className="latest-news-section">
                <span className="latest-news">Latest News: This is the latest news here</span>
            </div>
        </div>
    )
}

export default NavBar;
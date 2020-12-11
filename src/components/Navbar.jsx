import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signOut } from '../actions/index'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [hiddenNav, sethiddenNav] = useState("")
    const [user, setUser] = useState('')
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut());
      };
    
    const hideNav = () => {
        if( window.innerWidth < 1120 &&  hiddenNav==="d-none"){
            sethiddenNav("")
        }else{
            sethiddenNav("d-none")
        }
    }
  
    const handleResize = () => {
        if(window.innerWidth > 1120 ) {
            sethiddenNav("")
        }else if (window.innerWidth < 1120 ){
            sethiddenNav("d-none")
        }
    }

    const resizerOnLoad = () => {
        if(window.innerWidth > 1120) {
            sethiddenNav("")
            console.log('larger screen')
        }else {
            console.log('smaller screen')
            sethiddenNav("d-none")
        }
    }
    
      useEffect(()=>{
        resizerOnLoad()
        setUser(localStorage.user)
        window.addEventListener("resize", handleResize);
      },[])

    return (
        <div className="navbar-section">
            <div className="top-nav-section">
                <div className="main-title-section">
                    <em><span className="main-top-left-span">Go</span><span className="main-top-right-span">Mint.net</span></em>
                </div>
                <div className="icon-top-section">
                    <i 
                    onClick={hideNav}
                    className="fas fa-bars"></i>
                </div>
                <div className="sample-page-section">
                    <span>Sample Pages</span>
                </div>
                <div className="home-top-section">
                    <span>Home</span>
                </div>
            </div>
            <div className={`navigation-section ${hiddenNav}`}>
                <NavLink exact
                to={{
                    pathname: "/"
                }}
                activeClassName="active-button"
                className="home-navigation-section">
                    <span>Home</span>
                </NavLink>
                <NavLink 
                to = {{
                    pathname: "/about-us"
                }}
                activeClassName="active-button"
                className="about-navigation-section">
                    <span>About Us</span>
                </NavLink>
                <NavLink 
                to={{
                    pathname: "/vehicles-sale"
                }}
                activeClassName="active-button"
                className="vehicle-sale-nav-sectin">
                    <span>Vehicles For Sale</span>
                </NavLink>
                <NavLink 
                to={{
                    pathname: "/history"
                }}
                activeClassName="active-button"
                className="history-nav-section ">
                    <span>History Update</span>
                </NavLink>
                <NavLink 
                to={{
                    pathname: "/contact-us"
                }}
                activeClassName="active-button"
                className="contact-nav-section">
                    <span>Contact</span>
                </NavLink>
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
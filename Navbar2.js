import React, { useState, useEffect } from "react";
import "../css/Navbar2.css"
import { NavLink, Link } from "react-router-dom";
import Notification from './Notification';
import AccountMenu from "./AccountMenu";


const AfterLogin = () => {

  const [showNotification, setShowNotification] = useState(!false);

  const handleNotify = () => {
    if (showNotification === 'false') {
      <Notification />
    }
    else {
      <Notification />
    }
  }

  return (
    <>
      <ul className="social-media-desktop">

        <li className="nav-right-li">
          <Link className="nav-link" to="/message">
            <i className="fa-solid fa-message" />
          </Link>
        </li>

        <li className="nav-right-li notify_li">
          <Link className="nav-link notify_btn" to="#" onClick={() => setShowNotification(!showNotification)}>
            <i className="fa-solid fa-bell" />

            <div
              className={showNotification ? "div_notify_hide" : "div_notify"}>
              <Notification />
            </div>
          </Link>
        </li>

        <li className="nav-right-li">
          <Link className="nav-link nav-upload" to="/upload">
            Upload
          </Link>
        </li>

        <AccountMenu />

      </ul>
    </>
  )
}

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const logout = async () => {
    try {
      localStorage.removeItem("user");
      setIsLogged(false);
      const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkStorage();
    return () => { };
  }, [isLogged]);

  function checkStorage() {
    if (localStorage.getItem("user")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div className="nav-logo" title="Barter Home">
            <NavLink to="/">
              <img
                className="nav-logo-img"
                src="./images/barter.png"
                alt=""
              />
            </NavLink>
          </div>
        </div>

        {/* 2nd menu part  */}
        <div className={ "menu-link"}>
          <ul>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/learn">Learn</NavLink>
            </li>
          </ul>
        </div>

        {/* 3nd menu part  */}
        <div className="social-media">

          <ul className="social-media-desktop">

            <li>
              <NavLink to="/login">
                {!isLogged && <button className="nav-btn-login">Login</button>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                {!isLogged && <button className="nav-btn-signup">Get Started</button>}
              </NavLink>
            </li>

          {isLogged && <AfterLogin />}
          </ul>
  	      {/* {!isLogged && <button className="nav-btn-login">Login</button>} */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <Link href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fa-solid fa-bars" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
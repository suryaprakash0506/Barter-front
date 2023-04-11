import React, { useState, useEffect } from "react";
import "../css/Navbar2.css"
import { NavLink, Link } from "react-router-dom";
import Notification from './Notification';
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showNotification, setShowNotification] = useState(!false);
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
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div className="nav-logo" title="Barter Home">
            <NavLink to="/">
              <img
                className="nav-logo-img"
                src="./images/barter.jpeg"
                alt=""
              />
            </NavLink>
          </div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/explore">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/learn">Learn</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavLink to="/login">
                {!isLogged ? (
                  <button className="nav-btn-login">Login</button>
                ) : (
                  <button onClick={logout} className="nav-btn-login">Logout</button>
                )}

              </NavLink>
            </li>
            {/* <li>
                            <NavLink to="/signup"><button className='nav-btn-signup'>Sign Up</button></NavLink>
                        </li> */}
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
          </ul>

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
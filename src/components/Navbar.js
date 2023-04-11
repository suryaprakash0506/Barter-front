import React, { useState } from 'react'
import "../css/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className="nav-container">

                <div className="nav-content">

                    <div className='nav-logo'>
                        <Link to="/">
                            <img className='nav-logo-img' src="./images/barter.jpeg" alt="" />
                        </Link>
                    </div>

                    <div className="nav-items">

                        <div className="nav-left">
                            <ul className='nav-left-ul'>
                                <li className='nav-left-li'><Link className='nav-link active' to="/explore">Explore</Link></li>
                                <li className='nav-left-li'><Link className='nav-link' to="/blog">Blog</Link></li>
                                <li className='nav-left-li'><Link className='nav-link' to="/learn">Learn</Link></li>
                            </ul>
                        </div>

                        <div className='nav-right'>
                            <ul className='nav-right-ul'>
                                {/* <li className='nav-right-li'><Link className='nav-link nav-upload' to="/upload">Upload</Link></li> */}
                                <li className='nav-right-li'>
                                    <Link to="/login"><button className='nav-btn-login'>Log In</button></Link>
                                </li>
                                <li className='nav-right-li'>
                                    <Link to="/signup"><button className='nav-btn-signup'>Sign Up</button></Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar



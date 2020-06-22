import React from 'react'
import Logo from '../images/logo.PNG'
import { BrowserRouter, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className="nav-wrapper grey darken-3">
                <div className="enormlogov10.png">

                    <img src={Logo}
                        width="170px"
                        height="65px"
                        className="d-inline-block align-top"
                        alt="" />

                    <ul className="right">
                        <li><Link to="/buildE/videoplayer"><h2>Videoplayer</h2></Link></li>
                        <li><Link to="/buildE/Contact"><h2>Contact</h2></Link></li>
                    </ul>

                </div>
            </nav>
        </BrowserRouter>
    )
}

export default Navbar
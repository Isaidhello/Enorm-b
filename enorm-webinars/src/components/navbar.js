import React from 'react';
import Logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav>
            <Link to="/buildE/">
                <img src={Logo}
                    width="170px"
                    height="65px"
                    className="d-inline-block align-top"
                    alt="" />
            </Link>

            <Link to="/buildE/Videoplayer">
                Webinars
                </Link>
            <Link to="/buildE/Contact">
                Contact
                </Link>

        </nav>


    )
}

export default Navbar;
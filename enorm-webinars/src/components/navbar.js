import React from 'react';
import Logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

const mystyle = {
    color: "white",
    backgroundColor: "#1B1B1B",
    fontFamily: "Roboto"
  };


function Navbar() {
    return (

        <nav style={mystyle}>
            <Link to="/buildE/">
                <img src={Logo}
                    width="110px"
                    height="55px"
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
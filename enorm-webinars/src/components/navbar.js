import React from 'react';
import Logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        // <Router>
        //     <div className="enormlogov10.png">
        //         <nav className="nav-wrapper grey darken-3">


        //             <Link to="/buildE">
        //                 <img src={Logo}
        //                     width="170px"
        //                     height="65px"
        //                     className="d-inline-block align-top"
        //                     alt="" /></Link>


        //             <ul className="right">
        //                 <li><Link to="/buildE/Videoplayer">Videoplayer</Link></li>
        //                 <li><Link to="/buildE/Contact">Contact</Link></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </Router >

        <nav>
            <Link to="/buildE/">
                <img src={Logo}
                    width="170px"
                    height="65px"
                    className="d-inline-block align-top"
                    alt="" />
            </Link>
            <ul>

                <Link to="/buildE/Videoplayer">
                    <li>Videoplayer</li>
                </Link>
                <Link to="/buildE/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>


    )
}

export default Navbar;
import React from 'react'
import Logo from '../images/logo.PNG'


const Navbar = () => {
    return (
       <nav className="nav-wrapper grey darken-3">
           <div className="enormlogov10.png">

      <img src={Logo} 
              width="170px"
        height="65px"
        className="d-inline-block align-top"
        alt=""/>
            <ul className="right">
                <li><a href="/">Webinars</a></li>
                <li><a href="./components/Contact">Contact</a></li>
               
            </ul>
           </div>
           </nav>
    )
}

export default Navbar
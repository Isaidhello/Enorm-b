import React from 'react'



const Navbar = () => {
    return (
       <nav className="nav-wrapper grey darken-3">
           <div className="enormlogov10.png">
           <img className="brand-logo"
        src="images/enormlogov10.png"
       
        width="170px"
        height="65px"
        className="d-inline-block align-top"
        alt="enorm"
      />
            <ul className="right">
                <li><a href="/">Webinars</a></li>
                <li><a href="./components/Contact">Contact</a></li>
               
            </ul>
           </div>
           </nav>
    )
}

export default Navbar
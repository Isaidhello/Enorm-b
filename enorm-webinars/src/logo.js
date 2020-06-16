import React from 'react';
import logo from './images/enormlogov10'; // Tell webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png
function Header() {
 
  return <img src={logo} alt="Logo" />;
}
export default Header;
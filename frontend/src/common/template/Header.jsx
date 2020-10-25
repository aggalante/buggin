import React from "react";

import logoLg from "../../assets/logo-big.png";
import logoMini from "../../assets/logo-small.png";

import Navbar from "./Navbar";

export default (props) => {
  return (
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'>
          <img src={logoMini} alt='logo' style={{ maxWidth: "70%" }} />
        </span>
        <span className='logo-lg'>
          <img src={logoLg} alt='logo' style={{ maxWidth: "70%" }} />
        </span>
      </a>
      <nav className='navbar navbar-static-top'>
        <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        <Navbar />
      </nav>
    </header>
  );
};

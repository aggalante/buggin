import React from "react";
import Navbar from "./Navbar";

export default (props) => {
  return (
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'>
          <b>Bg</b>
        </span>
        <span className='logo-lg'>
          <b> Buggin </b>
        </span>
      </a>
      <nav className='navbar navbar-static-top'>
        <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        <Navbar />
      </nav>
    </header>
  );
};

import React from "react";
import { HashRouter } from "react-router-dom";

import Routes from "./Routes";
import Header from "../common/template/Header";
import SideBar from "../common/template/SideBar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/Messages";

export default (props) => (
  <HashRouter>
    <div className='wrapper'>
      <Header />
      <SideBar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);

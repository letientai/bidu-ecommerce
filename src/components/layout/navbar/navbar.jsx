import React from "react";
import Header_navbar from "./header_navbar/header_navbar.jsx";
import "../layout.scss";
import logo from "../../../assets/img/logo.png";
import { Search } from "./search/search";
import icon_cart from "../../../assets/icon/icon_cart.svg";
import icon_bell from "../../../assets/icon/icon_bell.svg";
import icon_bidu from "../../../assets/icon/icon_bidu.svg";
import icon_shopping from "../../../assets/icon/icon_shopping-active.svg";
import chat_normal from "../../../assets/icon/chat_normal.svg";
import { Login } from "../../login/login.jsx";
import { Register } from "../../register/register.jsx";
export const Navbar = () => {
  return (
    <div>
      <div className="login">
        {/* <Register/> */}
        {/* <Login/> */}
      </div>
      <div className="navbar_container">
        <div className="header">
          <Header_navbar />
        </div>
        <div className="main">
          <div className="content_main">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="search">
              <Search />
            </div>
            <div className="option">
              <img src={icon_shopping} alt="" />
              <img src={icon_bidu} alt="" />
              <img src={chat_normal} alt="" />
              <img src={icon_bell} alt="" />
              <img src={icon_cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

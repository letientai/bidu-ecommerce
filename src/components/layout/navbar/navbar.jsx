import React, { useState } from "react";
import HeaderNavbar from "./header_navbar/header_navbar.jsx";
import "../layout.scss";
import logo from "../../../assets/img/logo.png";
import { Search } from "./search/search";
// import icon_cart from "../../../assets/icon/icon_cart.svg";
// import icon_bell from "../../../assets/icon/icon_bell.svg";
// import icon_bidu from "../../../assets/icon/icon_bidu.svg";
// import icon_shopping from "../../../assets/icon/icon_shopping-active.svg";
// import chat_normal from "../../../assets/icon/chat_normal.svg";
import { Login } from "../../login/login.jsx";
import { Register } from "../../register/register.jsx";
import { useNavigate } from "react-router-dom";
import { Option } from "./option/option.jsx";
export const Navbar = (prop) => {
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const navigate = useNavigate()

  const passCheckRegister = (check) => {
    if (check) {
      setCheckRegister(true);
    }
  };

  const closeRegister = (check) => {
    if (!check) {
      setCheckRegister(false);
    }
  };

  const passCheckLogin = (check) => {
    if (check) {
      setCheckLogin(true);
    }
  };

  const closeLogin = (check) => {
    if (!check) {
      setCheckLogin(false);
      prop.checkLogin(true)
    }
  };

  const openRegister = (check) =>{
    if (check) {
      setCheckLogin(false);
      setCheckRegister(true)
    }
  }

  const moveToHome = () =>{
    navigate("/bidu-ecommerce")
  }

  const checkLogout = (check) =>{
    prop.checkLogin(false)
  }
  return (
    <div className="navbar">
      <div className="login">
        {checkRegister && <Register closeRegister={closeRegister}/>}
        {checkLogin && <Login closeLogin={closeLogin} openRegister={openRegister}/>}
      </div>
      <div className="navbar_container">
        <div className="header">
          <HeaderNavbar
            passCheckRegister={passCheckRegister}
            passCheckLogin={passCheckLogin}
            checkLogout={checkLogout}
          />
        </div>
        <div className="main">
          <div className="content_main">
            <div className="logo" onClick={moveToHome}>
              <img src={logo} alt="" />
            </div>
            <div className="search">
              <Search />
            </div>
            <div className="option">
              <Option/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

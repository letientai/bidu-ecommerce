import React, { useEffect, useState } from "react";
import "./header_navbar.scss";
import {useNavigate} from "react-router-dom"
const HeaderNavbar = (prop) => {
  const currenUser = localStorage.getItem("customerName");
  const [textLogin, setTextLogin] = useState("Đăng nhập");
  const navigate = useNavigate()

  const register = () => {
    prop.passCheckRegister(true);
  };

  const login = () => {
    prop.passCheckLogin(true);
  };

  const logOut = () => {
    localStorage.clear();
    setTextLogin("Đăng nhập");
    prop.checkLogout(true)
    navigate("/")
  };

  useEffect(() => {
    if (currenUser) {
      setTextLogin("Đăng xuất");
    }
  },[currenUser]);

  return (
    <div className="header__container">
      <div className="header__main">
        <div className="col left">
          <p>Trang người bán</p>
          <p>Danh mục</p>
        </div>
        <div className="col right">
          <p>Việt Nam</p>
          <span></span>
          {currenUser ? <p style={{color: "rgb(187, 58, 165)"}}>{currenUser}</p> : <p onClick={register}>Đăng ký</p>}
          <span></span>
          <p onClick={textLogin === "Đăng nhập" ? login : logOut}>
            {textLogin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;

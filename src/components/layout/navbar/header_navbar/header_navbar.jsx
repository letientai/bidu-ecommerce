import React, { useState } from "react";
import "./header_navbar.scss";
const Header_navbar = (prop) => {

  const register =  () =>{
    prop.passCheckRegister(true);
  }
  
  const login = () =>{
    prop.passCheckLogin(true);
  }
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
          <p onClick={register}>Đăng ký</p>
          <span></span>
          <p onClick={login}>Đăng nhập</p>
        </div>
      </div>
    </div>
  );
};

export default Header_navbar;

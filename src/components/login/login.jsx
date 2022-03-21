import React, { useState } from "react";
import "./login.scss";
import { Formik, FastField, Form } from "formik";
import { LoginSchema } from "./validate";
import logo1 from "../../assets/img-login/facebook.svg";
import logo2 from "../../assets/img-login/google.svg";
import logo3 from "../../assets/img-login/zalo.svg";
import logo4 from "../../assets/img-login/apple.svg";
import Cursor from "../../assets/img/cursor.png";
import auth_background from "../../assets/img-login/auth_background.svg";
import text_bidu from "../../assets/img-login/text_bidu.svg";
import icon_close_menu from "../../assets/img-login/icon_close_menu.svg";
import { Alert, CircularProgress } from "@mui/material";
const axios = require("axios");

export const Login = (prop) => {
  const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const closeLogin = () => {
    prop.closeLogin(false);
  };

  const openRegister = () => {
    prop.openRegister(true);
  };

  const onAdd = async (values, { resetForm }) => {
    await onLogin(values);
    await resetForm();
  };
  const onLogin = (values) => {
    setLoading(true);
    axios
      .post("https://lap-center.herokuapp.com/api/login", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        setLoading(false);
        localStorage.setItem("customerName", response.data.userName);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        prop.closeLogin(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  };
  return (
    <div className="container">
      {loading && (
        <div className="loading">
          <CircularProgress color="inherit" className="loading_progress" />
        </div>
      )}
      {/* {alert && (
        <Alert
          severity="warning"
          style={{ position: "fixed", zIndex: "4", top: "10px", right: "10px" }}
        >
          Sai tên đăng nhập hoặc mật khẩu!!!
        </Alert>
      )} */}
      <div
        className="outsite"
        onClick={closeLogin}
        style={{ cursor: `url(${Cursor}), pointer` }}
      >
        {" "}
      </div>
      <div className="form">
        <div
          className="intro"
          style={{ backgroundImage: `url(${auth_background})` }}
        >
          <img src={text_bidu} alt="" />
        </div>
        <div className="form__login">
          <div className="form__header">
            <img src={icon_close_menu} alt="" onClick={closeLogin} />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onAdd}
          >
            {({ errors, touched }) => (
              <Form className="form_fields">
                <div className="field">
                  <FastField
                    name="username"
                    placeholder="Email hoặc SĐT"
                    className="input"
                    type="text"
                  />
                  {errors.username && touched.username ? (
                    <div className="formError">{errors.username}</div>
                  ) : null}
                </div>
                <div className="field">
                  <FastField
                    name="password"
                    placeholder="Mật khẩu"
                    className="input"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="formError">{errors.password}</div>
                  ) : null}
                </div>
                <div className="field">
                  <button type="submit" className="btn_login">
                    Đăng nhập
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="sign-in-social-text">
            <span>Đăng nhập với tài khoản khác</span>
            <div className="logo">
              <img src={logo1} alt="" className="logo" />
              <img src={logo2} alt="" className="logo" />
              <img src={logo3} alt="" className="logo" />
              <img src={logo4} alt="" className="logo" />
            </div>
            <b>Quên mật khẩu</b>
            <div className="register">
              <span>Không có tài khoản? </span>{" "}
              <p onClick={openRegister}> Đăng ký </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

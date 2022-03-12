import React from "react";
import "./login.scss";
import { Formik, FastField, Form } from "formik";
import { SignupSchema } from "./validate";
import logo1 from "../../assets/img-login/facebook.svg";
import logo2 from "../../assets/img-login/google.svg";
import logo3 from "../../assets/img-login/zalo.svg";
import logo4 from "../../assets/img-login/apple.svg";
import Cursor from "../../assets/img/cursor.png";
import auth_background from "../../assets/img-login/auth_background.svg";
import text_bidu from "../../assets/img-login/text_bidu.svg";
import icon_close_menu from "../../assets/img-login/icon_close_menu.svg";
export const Login = (prop) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const closeLogin = () => {
    prop.closeLogin(false);
  };

  const openRegister = () =>{
    prop.openRegister(true)
  }
  return (
    <div className="container">
      <div
        className="outsite"
        onClick={closeLogin}
        style={{ cursor: `url(${Cursor}), pointer` }}
      ></div>
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
            validationSchema={SignupSchema}
            //   onSubmit={onAdd}
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
                  <button type="button" className="btn_login">
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
              <span>Không có tài khoản? </span>  <p onClick={openRegister}> Đăng ký </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

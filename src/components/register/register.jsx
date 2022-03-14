import React from "react";
import "./register.scss";
import { Formik, FastField, Form } from "formik";
import auth_background from "../../assets/img-login/auth_background.svg";
import text_bidu from "../../assets/img-login/text_bidu.svg";
import Cursor from "../../assets/img/cursor.png";
import icon_close_menu from "../../assets/img-login/icon_close_menu.svg";
import { RegisterSchema } from "./validate";
export const Register = (prop) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    phone: "",
  };

  const closeRegister = () => {
    prop.closeRegister(false);
  };

  const onRegister = () =>{
    console.log(1);
  }
  return (
    <div>
      <div className="container">
        <div
          className="outsite"
          onClick={closeRegister}
          style={{ cursor: `url(${Cursor}), pointer` }}
        ></div>
        <div className="form">
          <div
            className="intro"
            style={{ backgroundImage: `url(${auth_background})` }}
          >
            <img src={text_bidu} alt="" />
          </div>
          <div className="form__register">
            <div className="form__header">
              <img src={icon_close_menu} alt="" onClick={closeRegister} />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
                onSubmit={onRegister}
            >
              {({ errors, touched }) => (
                <Form className="form_fields">
                  <label htmlFor="">ĐĂNG KÝ</label>
                  <div className="field">
                    <FastField
                      name="username"
                      placeholder="Họ và tên"
                      className="input"
                      type="text"
                    />
                    {errors.username && touched.username ? (
                      <div className="formError">{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <FastField
                      name="email"
                      placeholder="Email"
                      className="input"
                    />
                    {errors.email && touched.email ? (
                      <div className="formError">{errors.email}</div>
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
                    <FastField
                      name="password_confirm"
                      placeholder="Nhập lại mật khẩu"
                      className="input"
                      type="password"
                    />
                    {errors.password_confirm && touched.password_confirm ? (
                      <div className="formError">{errors.password_confirm}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <FastField
                      name="phone"
                      placeholder="Số điện thoại"
                      className="input"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="formError">{errors.phone}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <button type="submit" className="btn_register">
                      Đăng nhập
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

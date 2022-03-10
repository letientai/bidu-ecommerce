import React from "react";
import "./register.scss";
import { Formik, FastField, Form } from "formik";
import auth_background from "../../assets/img-login/auth_background.svg";
import text_bidu from "../../assets/img-login/text_bidu.svg";
import icon_close_menu from "../../assets/img-login/icon_close_menu.svg";
import { RegisterSchema } from "./validate";
export const Register = () => {
  const initialValues = {
    username: "",
    email:"",
    password: "",
    confimlPassword: "",
    phone: "",
  };
  return (
    <div>
      <div className="container">
        <div className="outsite"></div>
        <div className="form">
          <div
            className="intro"
            style={{ backgroundImage: `url(${auth_background})` }}
          >
            <img src={text_bidu} alt="" />
          </div>
          <div className="form__register">
            <div className="form__header">
              <img src={icon_close_menu} alt="" />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              //   onSubmit={onAdd}
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
                    {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <FastField
                      name="password"
                      placeholder="Mật khẩu"
                      className="input"
                    />
                    {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <FastField
                      name="confimlPassword"
                      placeholder="Nhập lại mật khẩu"
                      className="input"
                    />
                    {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="field">
                    <FastField
                      name="phone"
                      placeholder="Số điện thoại"
                      className="input"
                    />
                    {errors.password && touched.password ? (
                      <div className="formError">{errors.password}</div>
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

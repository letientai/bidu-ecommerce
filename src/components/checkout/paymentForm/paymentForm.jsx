import React, { useEffect, useState } from "react";
import "./paymentForm.scss";
import { Formik, FastField, Form } from "formik";
import { commerce } from "../../../lib/commerce.js";
import {
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import parse from "html-react-parser";
import Select from "@mui/material/Select";
import { PaymentSchema } from "./validate";
import { UseStore, action } from "../../../store";
import { useNavigate } from "react-router-dom";
export const PaymentForm = (prop) => {
  const navigate = useNavigate();
  const totalPayment = prop.totalPayment + 32000;
  const [state, dispatch] = UseStore();
  const { checkoutData, listOrder } = state;

  const [listCountries, setListCountries] = useState([]);
  const [province, setProvince] = useState("");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const checkOutItem = localStorage.getItem("checkOutItem");
  const listProduct = JSON.parse(checkOutItem).filter(
    (x) => x.checkBuyNow === true
  );

  // const [listIdCountries, setListIdCountries] = useState([]);

  useEffect(() => {
    commerce.services.localeListSubdivisions("VN").then((response) => {
      const array = Object.values(response.subdivisions);
      setListCountries(array);
    });
    console.log(listProduct);
  }, []);

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const turnOffForm = () => {
    prop.turnOff(false);
  };

  const onAddOrder = async (values) => {
    console.log(values);
    setLoading(true);
    const infOrder = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      address: values.address,
      province: province,
      listProduct: listProduct,
    };
    setTimeout(() => {
      dispatch(action.SetProductsOrder(infOrder));
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("listOrder", JSON.stringify(state.listOrder));
        // turnOffForm();
        setAlert(true);
        setMessage("Đặt hàng thành công!!");
        setTimeout(() => {
          navigate("/bidu-ecommerce");
        }, 1000);
      }, 1000);
    }, 1000);
    // return () => clearTimeout(timer);
  };
  return (
    <div className="payment-container">
      {alert && (
        <div className="alert">
          <Alert severity="info">{message}</Alert>
        </div>
      )}
      {loading && (
        <div className="loading">
          <CircularProgress color="inherit" className="loading_progress" />
        </div>
      )}
      <div className="payment">
        <div className="right">
          <div className="image"></div>
        </div>
        <div className="left">
          <div className="form">
            <div className="header">
              <h2 className="header_text">Xác nhận đơn hàng</h2>
              <h4 className="header_text">Địa chỉ giao hàng</h4>
            </div>
            <div className="content">
              <Formik
                initialValues={initialValues}
                validationSchema={PaymentSchema}
                onSubmit={onAddOrder}
              >
                {({ errors, touched }) => (
                  <Form className="form_fields">
                    <div className="fields">
                      <div className="field">
                        <FastField
                          name="name"
                          placeholder="Họ và tên"
                          className="input"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div className="formError">{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="field">
                        <FastField
                          name="email"
                          placeholder="Email"
                          className="input"
                          type="text"
                        />
                        {errors.email && touched.email ? (
                          <div className="formError">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="fields">
                      <div className="field">
                        <FastField
                          name="phone"
                          placeholder="Số điện thoại"
                          className="input"
                          type="text"
                        />
                        {errors.phone && touched.phone ? (
                          <div className="formError">{errors.phone}</div>
                        ) : null}
                      </div>
                      <div className="field">
                        <FastField
                          name="address"
                          placeholder="Địa chỉ"
                          className="input"
                          type="text"
                        />
                        {errors.address && touched.address ? (
                          <div className="formError">{errors.address}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="fields">
                      <div className="field">
                        {/* {errors.password && touched.password ? (
                          <div className="formError">{errors.password}</div>
                        ) : null} */}
                        {/* <FormControl fullWidth> */}
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-standard-label">
                            Tỉnh thành
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={province}
                            label="Province"
                            onChange={handleChange}
                            className="select"
                          >
                            {listCountries?.map((item, index) => (
                              <MenuItem key={index} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="field">
                        <button type="onSubmit" className="btn btn-accept">
                          Xác nhận
                        </button>
                        <button
                          className="btn btn-cancel"
                          onClick={turnOffForm}
                        >
                          Hủy
                        </button>
                      </div>
                      {/* </FormControl> */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="total_price">
              <div className="left">
                <p>Hình thức thanh toán: Trực tiếp</p>
              </div>
              <div className="right">
                <div className="general-info-item">
                  <span>Phí vận chuyển:</span>
                  {province ? <span>32.000đ</span> : <span>0đ</span>}
                </div>
                <div className="general-info-item">
                  <span>Giảm giá phí vận chuyển:</span>
                  <span>0đ</span>
                </div>
                <div className="general-info-item">
                  <span>Giảm giá tiền hàng:</span>
                  <span>0đ</span>
                </div>
                <div className="general-info-item">
                  <span style={{ fontWeight: "bolder" }}>Tổng thanh toán:</span>
                  {province ? (
                    <span style={{ fontWeight: "bolder", color: "#fd37ae" }}>
                      {totalPayment
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      đ
                    </span>
                  ) : (
                    <span style={{ fontWeight: "bolder", color: "#fd37ae" }}>
                      0đ
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

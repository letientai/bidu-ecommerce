import React, { useEffect, useState } from "react";
import chevronRight from "../../assets/img/chevron-right.svg";
import { useLocation } from "react-router-dom";
import "./detailProduct.scss";
import { DataProduct } from "../../assets/data-product/dataProduct";
import minus_grey from "../../assets/img/minus_grey.svg";
import plus_white from "../../assets/img/plus_white.svg";
import { UseStore, action } from "../../store";
import { useNavigate } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { Alert, CircularProgress } from "@mui/material";

export const DetailProduct = (checklogin) => {
  const location = useLocation();
  const id = location.pathname.split("san-pham/")[1];
  const [count, setCount] = useState(1);
  const [mainData, setMainData] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [optionSize, setOptionSize] = useState(0);
  const [alert, setAlert] = useState(false);
  const [state, dispatch] = UseStore();
  const {  checkAddToCart,CheckCountInCart } = state;

  const currenUser = localStorage.getItem("customerName");
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    commerce.products.retrieve(id).then((product) => {
      setMainData(product);
      console.log(product);
      setLoading(false);
    });
  };

  const handleCount = (check) => {
    if (check === "plus") {
      setCount(count + 1);
    } else if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const handleSize = (index) => {
    // const products = cartProduct;
    // const product = products.filter((x) => x.id === mainData.id);
    // if (product.length === 0) {
    //   mainData.size = size;
    // }else{
    //   sentData.size = size
    // }
    // if (size === "S") {
    //   setOptionSize(1);
    // } else if (size === "M") {
    //   setOptionSize(2);
    // } else {
    //   setOptionSize(3);
    // }
  };
  useEffect(() => {
    // let isMounted = true;
    // if (isMounted) {
    //   fetchData();
    window.scrollTo({
      top: 0,
    });
    // }
    // return () => {
    //   isMounted = false;
    // };
    fetchData();
  }, [location, checklogin]);

  const addToCart = () => {
    if (currenUser) {
      setLoading(true);
      setMessage("Thêm sản phẩm thành công!");
      commerce.cart.add(id, count).then((response) => {
        console.log(response);
        dispatch(action.CheckAddToCart(!checkAddToCart));
        setLoading(false);
        setAlert(true);
        const timer = setTimeout(() => {
          setAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
      });
    }else{
      setMessage("Đăng nhập để thêm vào giỏ hàng!");
      setAlert(true);
        const timer = setTimeout(() => {
          setAlert(false);
        }, 3000);
    }
  };
  return (
    <div className="detailProduct">
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
      <div className="detailProduct_header">
        <div className="detailProduct_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>{mainData?.name}</p>
        </div>
      </div>
      <div className="detailProduct_content">
        <div className="main">
          <div className="main_content">
            <div className="image">
              <img src={mainData?.image.url} alt="" />
            </div>
            <div className="inf">
              <div className="name">
                <p>{mainData?.name}</p>
                <div className="row">
                  <div className="col">
                    <p>20</p>
                    <span>Đánh giá</span>
                  </div>
                  <div className="devider"></div>
                  <div className="col">
                    <p>19</p>
                    <span>Đã bán</span>
                  </div>
                </div>
              </div>
              <div className="price">
                <h1>{mainData?.price.formatted_with_symbol}</h1>
                <div className="discount">
                  <span>10%</span>
                </div>
              </div>
              <div className="price">
                <p>{(mainData?.price.raw * 110) / 100}đ</p>
              </div>
              <div className="sizes">
                <span>Kích cỡ: </span>
                {mainData?.variant_groups[0].options?.map((item, index) => (
                  <div
                    key={index}
                    className={
                      optionSize === 1
                        ? "size size_s clickOPtion"
                        : "size size_s"
                    }
                    onClick={(e) => handleSize(index)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <div className="amount">
                <span>Số lượng: </span>
                <div
                  className="btn_amount minus"
                  onClick={() => handleCount("minus")}
                >
                  <img className="icon_amount" src={minus_grey} alt="" />
                </div>
                <p>{count}</p>
                <div
                  className="btn_amount plus"
                  onClick={() => handleCount("plus")}
                >
                  <img className="icon_amount" src={plus_white} alt="" />
                </div>
              </div>
              <div className="button">
                <button className="btn addToCart" onClick={addToCart}>
                  Thêm vào giỏ
                </button>
                <button className="btn buyNow">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

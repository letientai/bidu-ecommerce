import React, { useEffect, useState } from "react";
import chevronRight from "../../assets/img/chevron-right.svg";
import { useLocation } from "react-router-dom";
import "./detailProduct.scss";
import { DataProduct } from "../../assets/data-product/dataProduct";
import minus_grey from "../../assets/img/minus_grey.svg";
import plus_white from "../../assets/img/plus_white.svg";
import { UseStore, action } from "../../store";
import { Alert } from "@mui/material";
export const DetailProduct = (checklogin) => {
  const location = useLocation();
  const id = location.pathname.split("san-pham/")[1];
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [mainData, setMainData] = useState({ name: "" });
  const [message, setMessage] = useState("");
  const [optionSize, setOptionSize] = useState(0);
  const [alert, setAlert] = useState(false);
  const [state, dispatch] = UseStore();
  const { cartProduct } = state;
  const currenUser = localStorage.getItem("customerName");
  const fetchData = () => {
    var data = DataProduct.filter((x) => x.id === Number(id))[0];
    setName(data?.name || "");
    setImage(data?.image || "");
    setPrice(data?.price || 0);
    setMainData(data);
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

  const handleSize = (size) => {
    mainData.size = size;
    if (size === "S") {
      setOptionSize(1);
    } else if (size === "M") {
      setOptionSize(2);
    } else {
      setOptionSize(3);
    }
  };
  useEffect(() => {
    fetchData();
    return mainData;
  }, [location, checklogin]);

  const addToCart = () => {
    if (currenUser) {
      if (mainData.size) {
        const products = cartProduct;
        const product = products.filter((x) => x.id === mainData.id);
        if (product.length === 0) {
          mainData.count = count;
          mainData.checkBuyNow = false
          dispatch(action.SetCartProduct(mainData));
        } else {
          mainData.count = mainData.count + count;
          dispatch(action.SetCartProductId(mainData));
        }
        setMessage("Thêm vào giỏ hàng thành công");
      } else {
        setMessage("Vui lòng chọn kích cỡ");
      }
    } else {
      setMessage("Đăng nhập để thêm vào giỏ hàng");
    }
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const buyNow = () => {
    console.log("mang", cartProduct);
  };
  return (
    <div className="detailProduct">
      {alert && (
        <div className="alert">
          <Alert severity="info">{message}</Alert>
        </div>
      )}
      <div className="detailProduct_header">
        <div className="detailProduct_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>{name}</p>
        </div>
      </div>
      <div className="detailProduct_content">
        <div className="main">
          <div className="main_content">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="inf">
              <div className="name">
                <p>{name}</p>
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
                <h1>
                  {(price * 0.9)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  đ
                </h1>
                <div className="discount">
                  <span>10%</span>
                </div>
              </div>
              <div className="price">
                <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
              </div>
              <div className="sizes">
                <span>Số lượng: </span>
                <div
                  className={
                    optionSize === 1 ? "size size_s clickOPtion" : "size size_s"
                  }
                  onClick={(e) => handleSize("S")}
                >
                  S
                </div>
                <div
                  className={
                    optionSize === 2 ? "size size_m clickOPtion" : "size size_m"
                  }
                  onClick={(e) => handleSize("M")}
                >
                  M
                </div>
                <div
                  className={
                    optionSize === 3 ? "size size_l clickOPtion" : "size size_l"
                  }
                  onClick={(e) => handleSize("L")}
                >
                  L
                </div>
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
                <button className="btn buyNow" onClick={buyNow}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

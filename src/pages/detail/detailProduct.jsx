import React, { useEffect, useState, useRef } from "react";
import chevronRight from "../../assets/img/chevron-right.svg";
import { useLocation } from "react-router-dom";
import "./detailProduct.scss";
import minus_grey from "../../assets/img/minus_grey.svg";
import plus_white from "../../assets/img/plus_white.svg";
import { UseStore, action } from "../../store";
import { useNavigate } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { Alert, CircularProgress } from "@mui/material";
import { LoadingDetail } from "../../components/loading/loadingDetail";
import parse from "html-react-parser";

export const DetailProduct = (checklogin) => {
  const ref = useRef([]);
  const location = useLocation();
  const id = location.pathname.split("san-pham/")[1];
  const [count, setCount] = useState(1);
  const [mainData, setMainData] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstLoading, setFistLoading] = useState(true);
  const [variantGroups, setVariantGroups] = useState({}); 
  const [checkSize, setCheckSize] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [alert, setAlert] = useState(false);
  const [state, dispatch] = UseStore();
  const { checkAddToCart, checkoutData } = state;
  const [idItemCart, setIdItemCart] = useState("");
  const [data, setData] = useState([]);
  const currenUser = localStorage.getItem("customerName");
  const navigate = useNavigate();

  const fetchData = () => {
    commerce.products.retrieve(id).then((product) => {
      setFistLoading(false);
      setMainData(product);
      setDescription(product.description);
      setImage(product?.image.url);
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    fetchData();
  }, [location, checklogin]);
  
  const handleSize = (item, indexOption) => {
    setVariantGroups({
      [mainData.variant_groups[0].id]: item.id,
    });
    setCheckSize(true);
    ref.current.forEach((element, index) => {
      if (index === indexOption) {
        ref.current[index].classList.add("clickOPtion");
      } else {
        ref.current[index].classList.remove("clickOPtion");
      }
    });
  };
  
  const addToCart = async (check) => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    if (currenUser) {
      if (checkSize) {
        setLoading(true);
        setMessage("Thêm sản phẩm thành công!");
        commerce.cart.add(id, count, variantGroups).then((response) => {
          console.log(id, count, variantGroups);
          dispatch(action.CheckAddToCart(!checkAddToCart));
          setIdItemCart(response.line_item_id);
          setLoading(!check);
          setAlert(check);
          setTimeout(() => {
            if (!check) {
              commerce.cart.retrieve().then((cart) => {
                dispatch(action.SetItemCheckout(cart.line_items));
                setData(cart.line_items);
                cart.line_items.forEach((element) => {
                  if (element.id === response.line_item_id) {
                    element.checkBuyNow = true;
                  } else {
                    element.checkBuyNow = false;
                  }
                });
                setTimeout(() => {
                  setLoading(false);
                  moveToCheckout(cart.line_items);
                }, 1000);
              });
            }
          }, 500);

          const timer = setTimeout(() => {
            setAlert(false);
          }, 3000);
          return () => clearTimeout(timer);
        });
      } else {
        setMessage("Chọn kích cỡ để tiếp tục!");
        setAlert(true);
        return () => clearTimeout(timer);
      }
    } else {
      setMessage("Đăng nhập để tiếp tục!");
      setAlert(true);
      return () => clearTimeout(timer);
    }
  };

  const payNow = async () => {
    await addToCart(false);
    // setLoading(true)
    // console.log(checkoutData);
  };

  const moveToCheckout = async (data) => {
    localStorage.setItem("checkOutItem", JSON.stringify(data));
    navigate("/thanh-toan");
  };
  const handleItemImage = (item) => {
    setImage(item.url);
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
          {firstLoading ? (
            <LoadingDetail />
          ) : (
            <div className="main_content">
              <div className="slide-image">
                <div className="slide">
                  {mainData?.assets.map((item, index) => (
                    <div
                      key={index}
                      className="item-img"
                      style={{ backgroundImage: `url(${item.url})` }}
                      onClick={(e) => handleItemImage(item)}
                    ></div>
                  ))}
                </div>
              </div>
              <div
                className="image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
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
                      ref={(element) => {
                        ref.current[index] = element;
                      }}
                      key={index}
                      className="size "
                      onClick={(e) => handleSize(item, index)}
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
                  <button
                    className="btn addToCart"
                    onClick={(e) => addToCart(true)}
                  >
                    Thêm vào giỏ
                  </button>
                  <button className="btn buyNow" onClick={payNow}>
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="description">
            <h2>Mô tả:</h2>
            {parse(description)}
          </div>
        </div>
      </div>
    </div>
  );
};

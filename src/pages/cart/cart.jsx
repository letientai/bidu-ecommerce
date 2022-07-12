import React, { useState, useEffect } from "react";
import "./cart.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import iconCart from "../../assets/img/icon-cart.svg";
import { CartItem } from "../../components/cart/card_item/cart_item";
import CheckBox from "react-animated-checkbox";
import { useNavigate } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { UseStore, action } from "../../store";
import { CircularProgress } from "@mui/material";

export const Cart = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [countCheckout, setCountCheckout] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [checkCount, setCheckCount] = useState(false);
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = UseStore();
  const { CheckCountInCart } = state;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    commerce.cart.retrieve().then((cart) => {
      setData(cart.line_items)
      setTotalItem(cart.total_unique_items)
      setLoading(false)
    });
  }, [checkCount,CheckCountInCart]);

  const checkout = (data) => {
    setCheckout();
  };

  const setCheckout = () => {
    // const products = cartProduct;
    // var totalProduct = 0;
    // var totalprice = 0;
    // const remainingProducts = products.filter((x) => x.checkBuyNow === true);
    // remainingProducts.forEach((element) => {
    //   totalProduct = totalProduct + element.count;
    //   totalprice = totalprice + element.count * element.price;
    // });
    // setTotalPrice(totalprice);
    // setCountCheckout(remainingProducts.length);
  };

  const handleClickCheckBox = (check) => {
    setCheck(check);
  };

  const handleCheckOut = () => {
    // dispatch(action.HandleCheckout());
    // navigate("/thanh-toan");
    // console.log(cartProduct);
  };
  const checkHandleCount = () =>{
    // setCheckCount(!checkCount)
  }
  return (
    <div className="cart">
      {loading && (
        <div className="loading">
          <CircularProgress color="inherit" className="loading_progress" />
        </div>
      )}
      <div className="cart_header">
        <div className="cart_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>Giỏ hàng</p>
        </div>
      </div>
      <div className="cart_content">
        <div className="main">
          <div className="title">
            <img src={iconCart} alt="" />
            <span>Giỏ hàng</span>
          </div>
          <div className="list-table">
            {data?.map((item, index) => (
              <CartItem item={item} key={index} setLoading={setLoading} checkHandleCount={checkHandleCount} checkAll={check}/>
            ))}
          </div>
          <div className="cart-actions">
            <div className="checkAll">
              <CheckBox
                checked={check}
                checkBoxStyle={{
                  checkedColor: "#191919",
                  size: 20,
                  unCheckedColor: "#191919",
                }}
                duration={70}
                onClick={() => handleClickCheckBox(!check)}
              />
              <p>Chọn tất cả ({totalItem})</p>
            </div>
            <div className="checkout">
              <span style={{ fontWeight: "bolder" }}>Tổng thanh toán</span>
              <span>({countCheckout} sản phẩm)</span>
              <span style={{ color: "#FE3877", fontWeight: "bolder" }}>
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
              </span>
              <button onClick={handleCheckOut}>Mua hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

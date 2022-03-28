import React, { useState, useEffect } from "react";
import "./cart.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import iconCart from "../../assets/img/icon-cart.svg";
import { UseStore, action } from "../../store";
import { CartItem } from "../../components/cart/card_item/cart_item";
import CheckBox from "react-animated-checkbox";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const [state, dispatch] = UseStore();
  const { cartProduct, countProduct } = state;
  const [data, setData] = useState(cartProduct);
  const [check, setCheck] = useState(false);
  const [countCheckout, setCountCheckout] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setData(cartProduct);
    setCheckout();
  }, [cartProduct, countProduct]);

  useEffect(() =>{
    cartProduct.forEach((element) => {
      element.checkBuyNow = false;
    });
  },[])
  const checkout = (data) => {
    setCheckout();
  };

  const setCheckout = () => {
    const products = cartProduct;
    var totalProduct = 0;
    var totalprice = 0;
    const remainingProducts = products.filter((x) => x.checkBuyNow === true);
    remainingProducts.forEach((element) => {
      totalProduct = totalProduct + element.count;
      totalprice = totalprice + element.count * element.price;
    });
    setTotalPrice(totalprice);
    setCountCheckout(remainingProducts.length);
    
  };

  const handleClickCheckBox = (check) => {
    setCheck(check);
    if (check) {
      cartProduct.forEach((element) => {
        element.checkBuyNox = true;
      });
    }
  };

  const handleCheckOut = () => {
    dispatch(action.HandleCheckout());
    navigate("/thanh-toan")
  };
  return (
    <div className="cart">
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
            {data.map((item, index) => (
              <CartItem item={item} key={index} checkout={checkout} />
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
              <p>Chọn tất cả ({cartProduct.length})</p>
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

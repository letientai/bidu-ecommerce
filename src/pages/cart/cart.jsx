import React, { useState } from "react";
import "./cart.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import CheckBox from "react-animated-checkbox";
import iconCart from "../../assets/img/icon-cart.svg";
import { UseStore } from "../../store";
import minus_grey from "../../assets/img/minus_grey.svg";
import plus_white from "../../assets/img/plus_white.svg";
import { Cart_item } from "../../components/cart/card_item/cart_item";
export const Cart = () => {
  const [state] = UseStore();
  const { cartProduct } = state;
  const [count, setCount] = useState(0);

  const handleCount = (check) => {
    if (check === "plus") {
      setCount(count + 1);
    } else if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
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
          <div className="cart-title">
            <img src={iconCart} alt="" />
            <span>Giỏ hàng</span>
          </div>
          <div className="list-table">
            {cartProduct.map((item, index) => (
              // <div className="cart-item" key={index}>
              //   <div className="check"></div>
              //   <div className="image">
              //     <img src={item.image} alt="" />
              //   </div>
              //   <div className="name">
              //     <p>{item.name}</p>
              //     <p>
              //       {item.price
              //         .toString()
              //         .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              //       đ
              //     </p>
              //   </div>
              //   <div className="amount">
              //     <span>Số lượng: </span>
              //     <div
              //       className="btn_amount minus"
              //       onClick={() => handleCount("minus")}
              //     >
              //       <img className="icon_amount" src={minus_grey} alt="" />
              //     </div>
              //     <p>{item.count}</p>
              //     <div
              //       className="btn_amount plus"
              //       onClick={() => handleCount("plus")}
              //     >
              //       <img className="icon_amount" src={plus_white} alt="" />
              //     </div>
              //   </div>
              // </div>
              <Cart_item item={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

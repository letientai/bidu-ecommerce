import React from "react";
import "./cart.scss";
import { UseStore } from "../../../../../store";
import { Card } from "./card/card";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const [state] = UseStore();
  const { cartProduct } = state;
  const currenUser = localStorage.getItem("customerName");
  const navigate = useNavigate();

  const moveToCart = () => {
    cartProduct.forEach(element => {
      element.checkBuyNow = false;
    });
    navigate("/gio-hang");
  };
  return (
    <div className="menu__Cart">
      <div className="menu__Cart__header">
        <h3>Giỏ hàng</h3>
      </div>
      <div className="menu__Cart__content">
        {currenUser ? (
          cartProduct.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <h4>Đăng nhập để xem giỏ hàng của bạn</h4>
        )}
      </div>
      {currenUser && (
        <div className="menu__Cart__btn" onClick={moveToCart}>
          <h4>Xem giỏ hàng ({cartProduct.length})</h4>
        </div>
      )}
    </div>
  );
};

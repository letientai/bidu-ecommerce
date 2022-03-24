import React, { useEffect } from "react";
import "./option.scss";
import icon_cart from "../../../../assets/icon/icon_cart.svg";
import icon_bell from "../../../../assets/icon/icon_bell.svg";
import icon_bidu from "../../../../assets/icon/icon_bidu.svg";
import icon_shopping from "../../../../assets/icon/icon_shopping-active.svg";
import chat_normal from "../../../../assets/icon/chat_normal.svg";
import { action, UseStore } from "../../../../store";
import { Cart } from "./cart/cart";
export const Option = () => {
  const [state, dispatch] = UseStore();
  const { cartProduct, countProduct, setStateCount } = state;
  const currenUser = localStorage.getItem("customerName");
  useEffect(() => {
    dispatch(action.SetCountCart());
    return cartProduct;
  }, [countProduct, cartProduct, setStateCount]);
  return (
    <div style={{ position: "relative" }}>
      <div className="option">
        <div className="option_icon ">
          <img src={icon_shopping} alt="" />
        </div>
        <div className="option_icon">
          <img src={icon_bidu} alt="" />
        </div>
        <div className="option_icon">
          <img src={chat_normal} alt="" />
        </div>
        <div className="option_icon">
          <img src={icon_bell} alt="" />
        </div>
        <div className="option_icon cart">
          <div className="menuCart">
            <Cart />
          </div>
          {currenUser && <div className="amountProduct">{cartProduct.length}</div>}
          <img src={icon_cart} alt="" />
        </div>
      </div>
    </div>
  );
};
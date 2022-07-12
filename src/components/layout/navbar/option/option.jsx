import React, { useEffect, useState } from "react";
import "./option.scss";
import icon_cart from "../../../../assets/icon/icon_cart.svg";
import icon_bell from "../../../../assets/icon/icon_bell.svg";
import icon_bidu from "../../../../assets/icon/icon_bidu.svg";
import icon_shopping from "../../../../assets/icon/icon_shopping-active.svg";
import chat_normal from "../../../../assets/icon/chat_normal.svg";
import { action, UseStore } from "../../../../store";
import { Cart } from "./cart/cart";
import {useNavigate} from "react-router-dom"
import { commerce } from "../../../../lib/commerce";

export const Option = () => {
  const [state, dispatch] = UseStore();
  const {  checkAddToCart,CheckCountInCart } = state;
  const currenUser = localStorage.getItem("customerName");
  const navigate = useNavigate()
  const [totalProduct, setTotalProduct] = useState(0)
  const [dataCart, setDataCart] = useState({})
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => {
      setTotalProduct(cart.total_unique_items)
      setDataCart(cart)
    });
  }, [checkAddToCart,CheckCountInCart]);

  const moveToCommunity = () =>{
    navigate("/cong-dong")
  }
  
  const moveToLanding = () =>{
    navigate("/landing")
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="option">
        <div className="option_icon " onClick={moveToLanding}>
          <img src={icon_shopping} alt="" />
        </div>
        <div className="option_icon" onClick={moveToCommunity}>
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
            <Cart dataCart={dataCart} />
          </div>
          {currenUser && <div className="amountProduct">{totalProduct}</div>}
          <img src={icon_cart} alt="" />
        </div>
      </div>
    </div>
  );
};

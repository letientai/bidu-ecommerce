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
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = UseStore();
  const { CheckCountInCart, checkoutData, checkAddToCart } = state;
  const totalProductCheck = checkoutData.filter((x) => x.checkBuyNow === true)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    commerce.cart.retrieve().then((cart) => {
      dispatch(action.SetItemCheckout(cart.line_items))
      setData(cart.line_items)
      setTotalItem(cart.total_unique_items)
      setLoading(false)
      console.log(cart);
    });
  }, [CheckCountInCart]);

  // useEffect(() =>{
  //   console.log(checkoutData);
  // },[checkAddToCart])
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
    if(check){
      checkoutData.forEach(element => {
        element.checkBuyNow = true
      });
    }else{
      checkoutData.forEach(element => {
        element.checkBuyNow = false
      });
    }
  };

  const handleCheckOut = () => {
    localStorage.setItem("checkOutItem", JSON.stringify(state.checkoutData))
    navigate("/thanh-toan");
  };
  const checkHandleCount = () =>{
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
          <p>Trang ch???</p>
          <img src={chevronRight} alt="" />
          <p>Gi??? h??ng</p>
        </div>
      </div>
      <div className="cart_content">
        <div className="main">
          <div className="title">
            <img src={iconCart} alt="" />
            <span>Gi??? h??ng</span>
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
              <p>Ch???n t???t c??? ({totalItem})</p>
            </div>
            <div className="checkout">
              <span style={{ fontWeight: "bolder" }}>T???ng thanh to??n</span>
              <span>({totalProductCheck.length} s???n ph???m)</span>
              <span style={{ color: "#FE3877", fontWeight: "bolder" }}>
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ??
              </span>
              <button onClick={handleCheckOut}>Mua h??ng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

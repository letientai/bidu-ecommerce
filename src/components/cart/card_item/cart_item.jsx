import React, { useState } from "react";
import "./cart_item.scss";
import minus_grey from "../../../assets/img/minus_grey.svg";
import plus_white from "../../../assets/img/plus_white.svg";
import { UseStore, action } from "../../../store";
import CheckBox from "react-animated-checkbox";

export const CartItem = (prop) => {
  const item = prop.item;
  const [count, setCount] = useState(item.count);
  const [state, dispatch] = UseStore();
  const { cartProduct } = state;
  const [check, setCheck] = useState(false);

  const handleCount = (check) => {
    if (check === "plus") {
      item.count = count + 1;
    } else if (count === 1) {
      item.count = 1;
    } else {
      item.count = count - 1;
    }
    setCount(item.count);
    dispatch(action.SetCountCart());
  };

  const handleDelete = () => {
    dispatch(action.DeleteProductToCart(item));
    console.log(cartProduct);
  };

  const handleClick = () => {
    setCheck(!check);
    if (check !== true) {
      item.checkBuyNow = true;
    } else {
      item.checkBuyNow = false;
    }
    prop.checkout();
  };
  return (
    <div className="cart-item">
      <div className="check">
        <CheckBox
          checked={check}
          checkBoxStyle={{
            checkedColor: "#191919",
            size: 20,
            unCheckedColor: "#191919",
          }}
          duration={70}
          onClick={handleClick}
        />
      </div>
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="name">
        <p>{item.name}</p>
        <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
      </div>
      <div className="amount">
        <span>Số lượng: </span>
        <div className="btn_amount minus" onClick={() => handleCount("minus")}>
          <img className="icon_amount" src={minus_grey} alt="" />
        </div>
        <p>{count}</p>
        <div className="btn_amount plus" onClick={() => handleCount("plus")}>
          <img className="icon_amount" src={plus_white} alt="" />
        </div>
      </div>
      <div className="btn_delete">
        <button onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

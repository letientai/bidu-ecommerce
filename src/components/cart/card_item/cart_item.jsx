import React, { useEffect, useState } from "react";
import "./cart_item.scss";
import minus_grey from "../../../assets/img/minus_grey.svg";
import plus_white from "../../../assets/img/plus_white.svg";
import { UseStore, action } from "../../../store";
import CheckBox from "react-animated-checkbox";
import { commerce } from "../../../lib/commerce";
import editing from "../../../assets/img/editing.png";

export const CartItem = (prop) => {
  const item = prop.item;
  const checkAll = prop.checkAll;
  const [state, dispatch] = UseStore();
  const { checkAddToCart, CheckCountInCart } = state;
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [count, setCount] = useState(item.quantity);
  useEffect(() => {
    setCheck(checkAll);
  }, [checkAll]);
  const handleCount = (check) => {
    // var count = item.quantity;
    if (check === "plus") {
      setCount(count + 1);
    } else if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
    // prop.setLoading(true);
    // commerce.cart.update(item.id, { quantity: count }).then((response) => {
    //   prop.setLoading(false);
    //   dispatch(action.CheckChangeCountInCart(!CheckCountInCart));
    // });
  };

  const handleDelete = () => {
    prop.setLoading(true);
    commerce.cart.remove(item.id).then((response) => {
      prop.setLoading(false);
      dispatch(action.CheckChangeCountInCart(!CheckCountInCart));
    });
    // dispatch(action.DeleteProductToCart(item));
    // console.log(cartProduct);
  };

  const handleClick = () => {
    setCheck(!check);
    // if (check !== true) {
    //   item.checkBuyNow = true;
    // } else {
    //   item.checkBuyNow = false;
    // }
    // prop.checkout();
  };
  const editCount = () => {
    setEdit(!edit);
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
        <img src={item.image.url} alt="" />
      </div>
      <div className="name">
        <p>{item.name}</p>
        <p>{item.price.formatted_with_code}</p>
      </div>
      <div className="amount">
        <span>Số lượng: </span>
        {edit && (
          <div
            className="btn_amount minus"
            onClick={() => handleCount("minus")}
          >
            <img className="icon_amount" src={minus_grey} alt="" />
          </div>
        )}
        <p>{count}</p>
        {edit ? (
          <div className="btn_amount plus" onClick={() => handleCount("plus")}>
            <img className="icon_amount" src={plus_white} alt="" />
          </div>
        ) : (
          <div className="editing">
            <img src={editing} alt="" onClick={editCount} />
          </div>
        )}
      </div>
      <div className="btn_delete">
        <button onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

import React, { useEffect, useState, useRef } from "react";
import "./cart_item.scss";
import minus_grey from "../../../assets/img/minus_grey.svg";
import plus_white from "../../../assets/img/plus_white.svg";
import { UseStore, action } from "../../../store";
import CheckBox from "react-animated-checkbox";
import { commerce } from "../../../lib/commerce";
import editing from "../../../assets/img/pencil.png";
import tick from "../../../assets/img/tick.png";
import { useNavigate } from "react-router-dom";

export const CartItem = (prop) => {
  const item = prop.item;
  const dataCart = prop.data;
  const checkAll = prop.checkAll;
  const [state, dispatch] = UseStore();
  const { checkAddToCart, CheckCountInCart, checkoutData } = state;
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [count, setCount] = useState(item.quantity);
  const [variantGroups, setVariantGroups] = useState({});
  const [variantGroupsUpdate, setVariantGroupsUpdate] = useState({});
  const [variantUpdateSame, setVariantUpdateSame] = useState({});

  const checkFinishUpdate = prop.checkFinishUpdateItemProduct;

  useEffect(() => {
    setCount(item.quantity);
    setEdit(false);
  }, [checkFinishUpdate, item]);

  const navigate = useNavigate();
  const ref = useRef([]);

  const moveToDetail = () => {
    navigate(`/san-pham/${item.product_id}`);
  };
  useEffect(() => {
    setCheck(checkAll);
  }, [checkAll]);
  useEffect(() => {
    commerce.products.retrieve(item.product_id).then((product) => {
      setVariantGroups(product.variant_groups[0]);
      console.log(variantGroups);
    });
  }, []);
  const handleCount = (check) => {
    if (check === "plus") {
      setCount(count + 1);
    } else if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const handleDelete = () => {
    prop.setLoading(true);
    commerce.cart.remove(item.id).then((response) => {
      prop.setLoading(false);
      dispatch(action.CheckChangeCountInCart(!CheckCountInCart));
    });
  };

  const handleClick = () => {
    setCheck(!check);
    const indexCheck = checkoutData.findIndex((x) => x.id === item.id);
    if (!check) {
      checkoutData[indexCheck].checkBuyNow = true;
    } else {
      checkoutData[indexCheck].checkBuyNow = false;
    }
    dispatch(action.CheckAddToCart(!checkAddToCart));
  };
  const editCount = () => {
    setEdit(true);
  };

  const cancelUpdate = () => {
    setCount(item.quantity);
    setEdit(false);
  };

  const handleFinishCount = () => {
    const key = Object.keys(variantUpdateSame);
    const value = Object.values(variantUpdateSame);

    let checkProductInCart = false;
    let productLocation = 0;
    
    // kiểm tra xem sản phẩm sau khi update có trùng với sản phẩm trong giỏ hàng hay không
    dataCart.forEach((element, index) => {
      if (
        element.selected_options[0].group_id === key[0] &&
        element.selected_options[0].option_name === value[0]
      ) {
        checkProductInCart = true;
        productLocation = index;
      }
    });

    //Cập nhật sản phẩm bị trùng
    if (checkProductInCart) {
      prop.UpdateDuplicateProduct(
        productLocation,
        count,
        variantGroupsUpdate,
        item
      );
    } else {
      let variantGroupsData = {
        quantity: count,
        options: variantGroupsUpdate,
      };
      prop.setLoading(true);
      commerce.cart.update(item.id, variantGroupsData).then((response) => {
        prop.setLoading(false);
        dispatch(action.CheckChangeCountInCart(!CheckCountInCart));
        setEdit(false);
      });
    }
  };

  const handleSize = (item, indexOption) => {
    console.log(item);
    setVariantGroupsUpdate({
      [variantGroups.id]: item.id,
    });
    setVariantUpdateSame({
      [variantGroups.id]: item.name,
    });
    ref.current.forEach((element, index) => {
      if (index === indexOption) {
        ref.current[index].classList.add("clickOPtion");
      } else {
        ref.current[index].classList.remove("clickOPtion");
      }
    });
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
        <div className="nameItem">
          <p onClick={moveToDetail}>{item.name}</p>
        </div>
        <p>{item.price.formatted_with_code}</p>
        <div className="variant_size">
          <span>Kích cỡ: </span>
          {edit ? (
            variantGroups?.options?.map((item, index) => (
              <div
                ref={(element) => {
                  ref.current[index] = element;
                }}
                key={index}
                className="optionSize"
                onClick={(e) => handleSize(item, index)}
              >
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p>{item.selected_options[0].option_name}</p>
          )}
        </div>
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
      {edit ? (
        <div className="btn_update">
          <div>
            <button onClick={handleFinishCount}>Xong</button>
          </div>
          <div>
            <button onClick={cancelUpdate}>Hủy</button>
          </div>
        </div>
      ) : (
        <div className="btn_delete">
          <button onClick={handleDelete}>Xóa</button>
        </div>
      )}
    </div>
  );
};

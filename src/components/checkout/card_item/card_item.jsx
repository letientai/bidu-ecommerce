import React from "react";
import "./card_item.scss";
export const CardItem = (prop) => {
  const data = prop.item;
  return (
    <div className="Checkout-card-item">
      <div className="image">
        <img src={data.image} alt="" />
      </div>
      <div className="name">
        <p>{data.name}</p>
        <b>Kích cỡ: {data.size}</b>
      </div>
      <div className="amount">
        <p>Số lượng</p>
        <b>{data.count}</b>
      </div>
      <div className="priceTotal">
        <p>Thành tiền</p>
        <b>
          {(data.count * data.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
        </b>
      </div>
    </div>
  );
};

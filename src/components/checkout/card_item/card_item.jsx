import React from "react";
import "./card_item.scss";
export const CardItem = (prop) => {
  const data = prop.item;
  return (
    <div className="Checkout-card-item">
      <div className="image">
        <img src={data.image.url} alt="" />
      </div>
      <div className="name">
        <p>{data.product_name}</p>
        <b>Kích cỡ: {data.selected_options[0].option_name}</b>
      </div>
      <div className="amount">
        <p>Số lượng</p>
        <b>{data.quantity}</b>
      </div>
      <div className="priceTotal">
        <p>Thành tiền</p>
        <b>
          {data.line_total.formatted_with_symbol}
        </b>
      </div>
    </div>
  );
};

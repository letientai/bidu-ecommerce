import React from "react";
import "./card.scss";
export const Card = (props) => {
  const data = props.item;
  return (
    <div className="cardProduct">
      <div className="image">
        <img src={data.image} alt="" />
      </div>
      <div className="company">
        <span>Chính hãng</span>
      </div>
      <div className="cardProduct__inf">
        <p>{data.name}</p>
        <b>{data.price}đ</b>
        <div className="address">
          <p>Việt nam</p>
        </div>
      </div>
    </div>
  );
};

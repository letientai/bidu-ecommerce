import React from "react";
import "./card.scss";
import { useNavigate } from "react-router-dom";
export const Card = (prop) => {
  const data = prop.item;
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/san-pham/${data.product_id}`);
  };
  return (
    <div className="CartCard" onClick={moveToDetail}>
      <div className="image">
        <img src={data.image.url} alt="" />
      </div>
      <div className="inf">
        <p className="inf_name">{data.name}</p>
        {/* <p>Kích cỡ: {data.size}</p> */}
        <b>{data.price.formatted_with_symbol} </b>
        <span>x{data.quantity}</span>
      </div>
    </div>
  );
};

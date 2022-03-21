import React from "react";
import "./card.scss";
import {useNavigate} from "react-router-dom"
export const Card = (prop) => {
  const data = prop.item;
  const navigate = useNavigate()

  const moveToDetail = () =>{
      navigate(`/san-pham/${data.id}`)
  }
  return (
    <div className="CartCard" onClick={moveToDetail}>
      <div className="image">
        <img src={data.image} alt="" />
      </div>
      <div className="inf">
        <p className="inf_name">{data.name}</p>
        <p>Kích cỡ: {data.size}</p>
        <b>
          {(data.price * 0.9).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
        </b>
        <span>x{data.count}</span>
      </div>
    </div>
  );
};

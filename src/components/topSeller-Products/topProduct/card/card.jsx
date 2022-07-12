import React from "react";
import "./card.scss";
import {useNavigate} from "react-router-dom"

export const Card = (props) => {
  const data = props.item;
  const navigate = useNavigate()
  const moveToDetail = () =>{
    navigate(`/san-pham/${data.id}`)
  }
  return (
    <div className="cardTopProduct" onClick={moveToDetail}>
      <img src={data?.image.url} alt="" /> 
      <div className="inf">
        <p>{data?.name}</p>
        <b>{data?.price.formatted_with_symbol}</b>
        <div className="address">
          <p>Việt nam</p>
        </div>
      </div>
    </div>
  );
};

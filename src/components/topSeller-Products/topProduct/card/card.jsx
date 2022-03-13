import React from "react";
import "./card.scss";
export const Card = (props) => {
  const data = props.item;

  return (
    <div className="card">
      <img src={data.image} alt="" />
      <div className="inf">
        <p>{data.name}</p>
      </div>
    </div>
  );
};

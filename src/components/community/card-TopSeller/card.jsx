import React from "react";
import "./card.scss";

export const Card = (prop) => {
  const data = prop.item;
  return <div className="Card-topSeller">
      <div className="image">
          <img src={data.image} alt="" />
      </div>
      <div className="name">
          <p>{data.name}</p>
          <i>{data.text}</i>
      </div>
  </div>;
};

import React from "react";
import { DataTopProduct } from "../../../assets/data-topProduct/dataTopProduct";
import { Card } from "./card/card";
import "./topProduct.scss";
export const TopProduct = () => {
  return (
    <div className="topProduct">
      <div className="topProduct_header">
        <h3>TOP SẢN PHẨM</h3>
      </div>
      <div className="topProduct_products">
        {DataTopProduct.map((item, index) => (
          <Card item={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

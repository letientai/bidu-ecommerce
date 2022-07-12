import React, { useEffect, useState } from "react";
import { Card } from "./card/card";
import "./topProduct.scss";
import { commerce } from "../../../lib/commerce";

export const TopProduct = () => {
  const [data,setData] = useState([])
  const fetchData = () => {
    commerce.products
      .list({
        limit: 5,
      })
      .then((product) => {
        setData(product.data);
        console.log(data); 
      });
  };
  useEffect(() =>{
    fetchData()
  },[])
  return (
    <div className="topProduct">
      <div className="topProduct_header">
        <h3>TOP SẢN PHẨM</h3>
      </div> 
      <div className="topProduct_products">
        {data?.map((item, index) => (
          <Card item={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

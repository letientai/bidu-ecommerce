import React, { useEffect, useState } from "react";
import { Card } from "./card/card";
import "./topProduct.scss";
import { commerce } from "../../../lib/commerce";
import { LoadingTopProduct } from "../../loading/loadingTopProduct";

export const TopProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    commerce.products
      .list({
        limit: 5,
      })
      .then((product) => {
        setData(product.data);
        console.log("ahihi");
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="topProduct">
      <div className="topProduct_header">
        <h3>TOP SẢN PHẨM</h3>
      </div>
      <div className="topProduct_products">
        {/* {data.map((item, index) => {
          // <Card item={item} key={index}/>
          // <LoadingTopProduct key={index}/>
          <p>ahihihih</p>
        })} */}
        {/* <LoadingTopProduct />
          <LoadingTopProduct />
          <LoadingTopProduct />
          <LoadingTopProduct />
          <LoadingTopProduct /> */}
        {loading ? (
          <LoadingTopProduct />
        ) : (
          data.map((item, index) => <Card item={item} key={index} />)
        )}
      </div>
    </div>
  );
};

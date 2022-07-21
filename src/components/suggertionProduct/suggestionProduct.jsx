import React, { useEffect, useState } from "react";
import "./suggestionProduct.scss";
import { Card } from "./card/card";
import { commerce } from "../../lib/commerce";
import { CircularProgress } from "@mui/material";
import { LoadingSuggest } from "../loading/loadingSuggest";

export const SuggestionProduct = () => {
  const [data, setData] = useState([]);
  const [nowAvailable, setNowAvailable] = useState(15);
  const [loading, setLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const fetchData = () => {
    commerce.products
      .list({
        limit: nowAvailable,
      })
      .then((product) => {
        setData(product.data);
        setLoading(false);
        setFirstLoading(false);
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 0);
    return () => clearTimeout(timer);
  }, [nowAvailable]);
  const seeMore = () => {
    setLoading(true);
    setNowAvailable(nowAvailable + 10);
  };
  return (
    <div className="suggestionProduct">
      <div className="suggestionProduct_header">
        <h3>GỢI Ý CHO BẠN</h3>
      </div>
      <div className="suggestionProduct_content">
        {firstLoading ? (
          <LoadingSuggest />
        ) : (
          data?.map((item, index) => <Card key={index} item={item} />)
        )}
      </div>
      <div className="suggestionProduct_seeMore" onClick={seeMore}>
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          <div onClick={seeMore} className="seeMore">
            <div className="text">Xem thêm</div>
          </div>
        )}
      </div>
    </div>
  );
};

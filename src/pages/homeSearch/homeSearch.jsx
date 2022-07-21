import React, { useState, useEffect } from "react";
import "./homeSearch.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import { Category } from "../../components/category/category";
import { useLocation } from "react-router-dom";
import { removeVietnameseTones } from "../../components/layout/navbar/search/removeVNtones";
import { Card } from "../../components/topSeller-Products/topSeller/card/card";
import { UseStore } from "../../store";
import { commerce } from "../../lib/commerce";
import { CircularProgress } from "@mui/material";

export const HomeSearch = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const search = location.pathname?.split("keyword=")[1];
  const [state] = UseStore();
  const [loading, setLoading] = useState(false);

  const fetchData = (search) => {
    setLoading(true);
    commerce.products
      .list({
        query: search,
      })
      .then((product) => {
        setData(product.data);
        setLoading(false);
      }
      );
  };

  const sentData = (category) => {
    // setData(
    //   DataProduct.filter((item) =>
    //     removeVietnameseTones(item?.name)
    //       ?.toLocaleLowerCase()
    //       ?.includes(category?.toLocaleLowerCase())
    //   )
    // );
    if (category === "all") {
      setLoading(true);
      commerce.products.list({
        limit: 35
      }).then((product) => {
        setData(product.data);
        setLoading(false);
      });
    } else {
      fetchData(category);
    }
  };

  useEffect(() => {
    fetchData(search);
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  return (
    <div className="homeSearch">
      {loading && (
        <div className="loading">
          <CircularProgress color="inherit" className="loading_progress" />
        </div>
      )} 
      <div className="homeSearch_header">
        <div className="homeSearch_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>Tìm kiếm</p>
          <img src={chevronRight} alt="" />
          <p>{search}</p>
        </div>
      </div>
      <div className="homeSearch_content">
        <div className="main">
          <div className="category">
            <Category sentData={sentData} />
          </div>
          <div className="main_content">
            {data?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
            {!data?.length && <h3>Không tìm thấy sản phẩm nào!!!</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

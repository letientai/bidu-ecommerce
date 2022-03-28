import React, { useState, useEffect } from "react";
import "./homeSearch.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import { Category } from "../../components/category/category";
import { DataProduct } from "../../assets/data-product/dataProduct";
import { useLocation } from "react-router-dom";
import { removeVietnameseTones } from "../../components/layout/navbar/search/removeVNtones";
import { Card } from "../../components/topSeller-Products/topSeller/card/card";
import { UseStore } from "../../store";
export const HomeSearch = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const search = location.pathname?.split("keyword=")[1];
  const [state] = UseStore();
  const { cartProduct } = state;

  const fetchData = () => {
    setData(
      DataProduct.filter((item) =>
        removeVietnameseTones(item?.name)
          ?.toLocaleLowerCase()
          ?.includes(search?.toLocaleLowerCase())
      )
    );
    cartProduct.forEach((element) => {
      element.checkBuyNow = false;
    });
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className="homeSearch">
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
            <Category />
          </div>
          <div className="main_content">
            {data?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
            {data.length === 0 && <h3>Không tìm thấy sản phẩm nào!!!</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

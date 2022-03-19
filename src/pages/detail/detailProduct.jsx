import React, { useEffect, useState } from "react";
import chevronRight from "../../assets/img/chevron-right.svg";
import { useLocation } from "react-router-dom";
import "./detailProduct.scss";
import { DataProduct } from "../../assets/data-product/dataProduct";
export const DetailProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("san-pham/")[1];
  const [name, setName] = useState("");
  var data = [];
  const fetchData = () => {
    data = DataProduct.filter((x) => x.id === Number(id));
    setName(data[0].name);
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className="detailProduct">
      <div className="detailProduct_header">
        <div className="detailProduct_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>{name}</p>
        </div>
      </div>
      <div className="detailProduct_content">
        <div className="main">
            
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./category.scss";
export const Category = (prop) => {
  const filterSearch = (data) =>{
    prop.sentData(data)
  }
  return (
    <div className="Category">
      <div className="Category_header">
          <p>Danh mục</p>
      </div>
      <div className="Category_content">
          <p onClick={(e) => filterSearch("all")}>Tất cả</p>
          <p>BIDU Ari</p>
          <p onClick={(e) => filterSearch("ao")}>Áo</p>
          <p onClick={(e) => filterSearch("vay")}>Váy liền/set</p>
          <p onClick={(e) => filterSearch("quan")}>Quần</p>
          <p onClick={(e) => filterSearch("chan vay")}>Chân váy</p>
      </div>
    </div>
  );
};

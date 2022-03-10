import React from "react";
import './search.scss'
export const Search = () => {
  return (
    <div className="search__inp">
      <input className="inp" type="text" placeholder="Tìm kiếm" />
      <div className="search__inp__icon">
        <img
          src="https://web-staging.bidu.com.vn/images/icon/icon_search.svg"
          alt=""
        />
      </div>
    </div>
  );
};

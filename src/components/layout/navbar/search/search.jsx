import React, { useState } from "react";
import "./search.scss";
import {useNavigate} from "react-router-dom"
import { removeVietnameseTones } from "./removeVNtones";

export const Search = () => {
  const [data,setData] = useState("");
  const navigate = useNavigate();
  
  const setSearch = (e) => {
    setData(e.target.value);
  };

  const handleSearch = (e) =>{
    if(e.key === 'Enter' && data !== ""){
      navigate(`/tim-kiem/keyword=${removeVietnameseTones(data)}`)
      setData("")
    }
  }
  const handleSearch1 = () =>{
    if(data !== ""){
      navigate(`/tim-kiem/keyword=${removeVietnameseTones(data)}`)
    }
  }

  
  return (
    <div className="search__inp">
      <input
        className="inp"
        type="text"
        placeholder="Tìm kiếm"
        value={data}
        onChange={(e) => setSearch(e)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <div className="search__inp__icon" onClick={handleSearch1}>
        <img
          src="https://web-staging.bidu.com.vn/images/icon/icon_search.svg"
          alt=""
        />
      </div>
    </div>
  );
};

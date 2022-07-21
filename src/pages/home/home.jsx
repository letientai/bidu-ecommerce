import React, { useEffect, useState } from "react";
import { Banner } from "../../components/banner/banner";
import { Carousel } from "../../components/carousel/carousel";
import { SuggestionProduct } from "../../components/suggertionProduct/suggestionProduct";
import { TopProduct } from "../../components/topSeller-Products/topProduct/topProduct";
import { TopSeller } from "../../components/topSeller-Products/topSeller/topSeller";
import "./home.scss";
import { commerce } from "../../lib/commerce";
import { CircularProgress } from "@mui/material";

export const Home = () => {

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = () => {
    commerce.products.list().then((product) => {
      console.log(product);
    });
  };
  return (
    <div className="container">
      <div className="Home_content">
        <div className="banner">
          <Banner />
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="Content Content_1">
          <TopProduct />
          <TopSeller />
        </div>
        <div className="Content Content_2">
          <SuggestionProduct />
        </div>
      </div>
    </div>
  );
};

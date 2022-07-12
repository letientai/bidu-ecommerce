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
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = () => {
    setLoading(true)
    commerce.products.list().then((product) => {
      console.log(product);
      setLoading(false)
    });
  };
  return (
    <div className="container">
      {loading && (
        <div className="loading">
          <CircularProgress color="inherit" className="loading_progress" />
        </div>
      )}
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

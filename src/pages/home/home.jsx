import React from "react";
import { Banner } from "../../components/banner/banner";
import { Carousel } from "../../components/carousel/carousel";
import { TopProduct } from "../../components/topSeller-Products/topProduct/topProduct";
import { TopSeller } from "../../components/topSeller-Products/topSeller/topSeller";
import "./home.scss";
export const Home = () => {
  return (
    <div className="container">
      <div className="Home_content">
        <div className="banner">
          <Banner />
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="content1">
          <TopProduct />
          <TopSeller />
        </div>
      </div>
    </div>
  );
};

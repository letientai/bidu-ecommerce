import React from "react";
import { Banner } from "../../components/banner/banner";
import { Carousel } from "../../components/carousel/carousel";
import "./home.scss";
export const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <Banner />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

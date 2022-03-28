import React, { useEffect } from "react";
import { Banner } from "../../components/banner/banner";
import { Carousel } from "../../components/carousel/carousel";
import { SuggestionProduct } from "../../components/suggertionProduct/suggestionProduct";
import { TopProduct } from "../../components/topSeller-Products/topProduct/topProduct";
import { TopSeller } from "../../components/topSeller-Products/topSeller/topSeller";
import "./home.scss";
import { UseStore } from "../../store";
export const Home = () => {
  const [state] = UseStore();
  const { cartProduct } = state;
  useEffect(() => {
    cartProduct.forEach((element) => {
      element.checkBuyNow = false;
    });
  });
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

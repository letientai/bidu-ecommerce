import React from "react";
import { DataTopSeller } from "../../../assets/data-topSeller/dataSeller";
import "./topSeller.scss";
import Slider from "react-slick";
import heart from "./shop-heart.svg";
import { Card } from "./card/card";
import { DataNewProduct } from "../../../assets/data-newProduct/dataNewProduct";
export const TopSeller = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    arrows: true,
  };
  return (
    <div className="content">
      <div className="topSeller">
        <div className="topSeller_header">
          <h3>TOP NGƯỜI BÁN</h3>
        </div>
        <div className="topSeller_sellers">
          <Slider {...settings}>
            {DataTopSeller.map((item, index) => (
              <div key={index} className="slick_Seller">
                <div className="top">
                  <p>{index + 1}</p>
                </div>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <div className="view">
                  <div className="icon-heart">
                    <img src={heart} alt="" />
                    <span>10</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="newProduct">
        <div className="newProduct_header">
          <h3>SẢN PHẨM MỚI NHẤT</h3>
        </div>
        <div className="newProduct_content">
          <div className="slide">
            <Slider {...settings1}>
              {DataNewProduct.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
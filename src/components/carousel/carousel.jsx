import React from "react";
import {DataCarousel} from '../../assets/data-carousel/dataCarousel'
import Slider from "react-slick";
import "./carousel.scss";
export const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
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
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 10,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 12,
          initialSlide: 0,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {DataCarousel.map((item, index) => (
        <div key={index} className="slick_carousel">
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </Slider>
  );
};

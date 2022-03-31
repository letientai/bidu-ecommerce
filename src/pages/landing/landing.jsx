import React, { useEffect } from "react";
import "./landing.scss";
import grayBidu from "../../assets/download/img/gray-bidu.svg";
import leftComma from "../../assets/download/img/left-comma.svg";
import rightComma from "../../assets/download/img/right-comma.svg";
import { Banner } from "../../components/landing/banner/banner";
import { Section3 } from "../../components/landing/section3/section3";
import { Section4 } from "../../components/landing/section4/section4";
export const Landing = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
    });
  },[])
  return (
    <div className="download">
      <Banner/>
      <div className="description">
        <div>
          <img src={grayBidu} alt="" />
        </div>
        <div className="position-absolute col-12 col-md-8 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={leftComma} alt="" />
          <div className="text_community">
            BIDU tin rằng cảm hứng thời trang có thể đến từ bất kỳ ai, bất kỳ
            nơi nào trong cuộc sống của mỗi người. Chúng tôi mong muốn xây dựng
            một ứng dụng nơi mà người dùng có thể tự tin thể hiện cá tính của
            riêng họ thông qua thời trang một cách tự do và đồng thời truyền cảm
            hứng cho mọi người xung quanh.
          </div>
          <img src={rightComma} alt="" />
        </div>
      </div>
      <Section3/>
      <Section4/>
    </div>
  );
};

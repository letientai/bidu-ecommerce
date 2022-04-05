import React from 'react'
import bgBanner from "../../assets/download/img/bg_banner_pc.jpg";
import langding from "../../assets/download/img/qr.jpg";
import appstore from "../../assets/download/img/appstore.svg";
import ggplay from "../../assets/download/img/ggplay.svg";
import modelPc from "../../assets/download/img/model_pc.png";
export const Banner = () => {
  return (
    <div className="banner">
        <div className="layout-padding">
          <div className="text-center">
            <div className="section-1">
              <div className="text">
                <span>
                  Không chỉ là ứng dụng mua sắm mà còn là câu chuyện thời trang
                  của bạn
                </span>
              </div>
            </div>
            <div className="dowload_now_text">TẢI NGAY!</div>
            <div className="scan-qr">
              <div className="d-flex">
                <img src={langding} alt="" />
                <div style={{ borderRight: "1px solid #C4C4C4" }}></div>
              </div>
              <div className="max-h-120">
                <div>
                  <a href="https://apps.apple.com/vn/app/bidu-fashion-shopping/id1573709513">
                    <img src={appstore} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://play.google.com/store/apps/details?id=com.bidu&hl=vi">
                    <img src={ggplay} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="position-model">
            <img src={modelPc} alt="" />
          </div>
        </div>
        <div className="cover-image">
          <img src={bgBanner} alt="" />
        </div>
      </div>
  )
}

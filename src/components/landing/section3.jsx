import React from "react";
import icCamera from "../../assets/download/img/ic-camera.svg";
import icbag from "../../assets/download/img/ic-bag.svg";
import iclothes from "../../assets/download/img/ic-clothes.svg";
import icpackage from "../../assets/download/img/ic-package.svg";
import section4 from "../../assets/download/img/img_section_4_vi.png";
export const Section3 = () => {
  const data = [
    {
      image: icCamera,
      text: "Chia sẻ outfit & sáng tạo lookbook thời trang của riêng bạn",
    },
    {
      image: iclothes,
      text: "Kết nối với xu hướng thời gian mới nhất",
    },
    {
      image: icpackage,
      text: "Hỗ trợ thanh toán & vận chuyển thuận tiện, nhanh chóng, và an toàn",
    },
    {
      image: icbag,
      text: "Mua và bán trực tiếp trên trang cá nhân",
    },
  ];
  return (
    <div className="position-relative">
      <div className="align-items-center">
        <div className="my-4">
          <div className="justify-content-center">
            <div className="row">
              {data?.map((item, index) => (
                <div className="col-12" key={index}>
                  <div className="align-items-end">
                    <div className="text-center">
                      <img src={item.image} alt="" />
                      <div className="text_community">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="layout-padding">
          <img src={section4} alt="" />
        </div>
      </div>
    </div>
  );
};

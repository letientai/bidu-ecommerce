import React from "react";
import imgSection5 from "../../assets/download/img/img_section_5_vi.png";
import lichSu from "../../assets/download/img/lich_su.svg";
import tamNhin from "../../assets/download/img/tam_nhin.svg";
import giaTriCotLoi from "../../assets/download/img/gia_tri_cot_loi.svg";
export const Section4 = () => {
  const data = [
    {
      img: lichSu,
      title: "Lịch sử",
      text: "Ra mắt năm 2020, BIDU được tạo ra nhằm mang lại sự kết nối dành cho những người dùng đam mê thời trang thông qua việc chia sẻ , khuyến khích và truyền cảm hứng thông qua câu chuyện thời trang, làm đẹp của mỗi cá nhân.",
    },
    {
      img: tamNhin,
      title: "Tầm nhìn",
      text: "BIDU sẽ nỗ lực tạo ra một môi trường lành mạnh dành cho những người yêu thời trang và trở thành một trong những nền tảng thời trang dẫn đầu tại Việt Nam..",
    },
    {
      img: giaTriCotLoi,
      title: "Giá trị cốt lõi",
      text: "Chúng tôi tin rằng bằng sự sáng tạo không ngừng nghỉ, lòng tin cậy và niềm đam mê, bất kỳ ai cũng có thể trở thành nguồn cảm hứng cho những người xung quanh. Hơn thế nữa, mỗi chúng ta đều có thể tự do thể hiện bản thân thông qua thời trang mà không bị phán xét hay chỉ trích..",
    },
  ];
  return (
    <div className="height-community2">
      <div className="align-items-center">
        <img src={imgSection5} alt="" />
        <div className="ml-0">
          <div className="w-100">
            {data.map((item, index) => (
              <div className="lg-flex-md-none" key={index}>
                <div className="mr-lg-4">
                  <img src={item.img} alt="" />
                  <div className="text_community2">{item.title}</div>
                </div>
                <div className="text_community align-desktop">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import momo from "../../assets/img/momo.svg";
import vnpay from "../../assets/img/vnpay.svg";
import cash from "../../assets/img/cash_vi.svg";
import fb from "../../assets/img/facebook.svg";
import ig from "../../assets/img/instagram.svg";
import tw from "../../assets/img/twitter.svg";
import appstore from "../../assets/download/img/appstore.svg";
import ggplay from "../../assets/download/img/ggplay.svg";
import logo_CCDV from "../../assets/img/logo_CCDV_BCT.svg";
export const Footer = () => {
  return (
    <div className="footer_bidu">
      <div className="containeer">
        <div className="instruction-one">
          <h1 className="text-header-footer">CHĂM SÓC KHÁCH HÀNG</h1>
          <a href="#" className="d-block my-3">
            Hướng dẫn mua hàng
          </a>
          <a href="#" className="d-block my-3">
            Hướng dẫn bán hàng
          </a>
          <a href="#" className="d-block my-3">
            Hướng dẫn đổi trả hàng
          </a>
        </div>
        <div className="instruction-one">
          <h1 className="text-header-footer">Về BIDU</h1>
          <a href="#" className="d-block my-3">
            Giới thiệu
          </a>
          <a href="#" className="d-block my-3">
            Tuyển dụng
          </a>
          <a href="#" className="d-block my-3">
            Quy chế hoạt động
          </a>
          <a href="#" className="d-block my-3">
            Chính sách giải quyết khiếu nại
          </a>
          <a href="#" className="d-block my-3">
            Chính sách bảo mật
          </a>
          s{" "}
        </div>
        <div className="instruction-one">
          <h1 className="text-header-footer">Thanh toán</h1>
          <img className="pr-3" src={vnpay} alt="" />
          <img className="pr-3" src={momo} alt="" />
          <img className="pr-3" src={cash} alt="" />
        </div>
        <div className="instruction-one">
          <h1 className="text-header-footer">Kết nối với chung tôi</h1>
          <img className="px-3" src={fb} alt="" />
          <img className="px-3" src={ig} alt="" />
          <img className="px-3" src={tw} alt="" />
          <h1 className="text-header-footer">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h1>
          <img className="max-h-120 pr-3" src={appstore} alt="" />
          <img className="max-h-120 pr-3" src={ggplay} alt="" />
        </div>
      </div>
      <div className="footer-info">
        <div>
          <h1 className="infor-company">Công ty TNHH MJ ART GROUP</h1>
          <a href="" className="mx-2">
            <img src={logo_CCDV} alt="" />
          </a>
          <a href="" className="mx-2">
            <img src={logo_CCDV} alt="" />
          </a>
          <h1 className="infor-contact">
            Địa chỉ: Tầng 7, số 50 Bạch Đằng, Phường Hải Châu I, Quận Hải Châu,
            Thành phố Đà Nẵng, Việt Nam. Số điện thoại: 02363.933.340 - Email:
            info@mjartgroup.com
          </h1>
          <h1 className="infor-enterprise">
            Người đại diện pháp luật: Kim Moo Joong. Mã số doanh nghiệp:
            0401908254 do Sở Kế hoạch & Đầu tư TP Đà Nẵng cấp lần đầu ngày
            26/06/2018
          </h1>
          <h1 className="infor-license">
            © 2020 - Bản quyền thuộc về Công ty TNHH MJ ART GROUP
          </h1>
        </div>
      </div>
    </div>
  );
};

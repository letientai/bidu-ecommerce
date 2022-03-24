import React from "react";
import "./checkout.scss";
import chevronRight from "../../assets/img/chevron-right.svg";
import iconCheckout from "../../assets/img/icon-checkout.svg";
import iconCheckoutVouucher from "../../assets/img/icon-checkout-system-vouucher.svg";
import iconCheckoutPayment from "../../assets/img/icon-checkout-payment.svg";
import { UseStore, action } from "../../store";
import { CardItem } from "../../components/checkout/card_item/card_item";
export const Checkout = () => {
  const [state, dispatch] = UseStore();
  const { cartProduct, countProduct, dataCheckout } = state;

  return (
    <div className="Checkout">
      <div className="Checkout_header">
        <div className="Checkout_header_content">
          <p>Trang chủ</p>
          <img src={chevronRight} alt="" />
          <p>Thanh toán</p>
        </div>
      </div>
      <div className="Checkout_content">
        <div className="main">
          <div className="title">
            <img src={iconCheckout} alt="" />
            <span>Thanh toán</span>
          </div>
          <div className="order-info">
            <div className="order-info-header">
              <span>Đơn hàng</span>
            </div>
            <div className="order-info-body">
              {dataCheckout?.map((item, index) => (
                <CardItem key={index} item={item} />
              ))}
            </div>
            <div className="system-vouchers">
              <div className="title">
                <img src={iconCheckoutVouucher} alt="" />
                <p>Thanh toán</p>
              </div>
              <div className="action-vouchers">Chọn voucher</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

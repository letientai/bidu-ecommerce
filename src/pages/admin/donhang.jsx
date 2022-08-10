import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/admin/content/navbar";
import "./admin.scss";
import Chart from "react-apexcharts";
import { NavbarAdmin } from "../../components/admin/layout/navbar";
import { Card } from "../../components/admin/content/card";
import { commerce } from "../../lib/commerce";
import { removeVietnameseTones } from "../../components/layout/navbar/search/removeVNtones";
import { TableOrder } from "../../components/admin/content/tableOrder";
import { FormDetailOrder } from "../../components/admin/content/formDetailOrder";
export const Donhang = () => {
  const [data, setData] = useState([]);
  const [ItemDetail, setItemDetail] = useState({});
  const [checkFormDetail, setCheckFormDetail] = useState(false);
  const listOrder = localStorage.getItem("listOrder");
  const dataOrder = JSON.parse(listOrder);
  const fetchData = () => {
    commerce.products
      .list({
        limit: 50,
      })
      .then((product) => setData(product.data));
  };

  useEffect(() => {
    fetchData();
  });

  const dataProductCard = [
    {
      text: "TỔNG SỐ DANH MỤC",
      count: 14,
    },
    {
      text: "TỔNG SỐ SẢN PHẨM",
      count: data?.length,
    },
    {
      text: "TỔNG SỐ ĐƠN HÀNG",
      count: dataOrder?.length,
    },
  ];

  const sendItemDetailOrder = (item) => {
    setItemDetail(item);
    setCheckFormDetail(true);
  };

  const closeForm = (check) => {
    setCheckFormDetail(check)
  }
  return (
    <div className="_loading_overlay_wrapper css-79elbk">
      {checkFormDetail && <FormDetailOrder ItemDetail={ItemDetail} closeForm={closeForm}/>}
      <NavbarAdmin />
      <div className="main-content">
        <Navbar />
        <div
          className="Products-Card"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {dataProductCard.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className="chart">
          <div className="header"></div>
          <div className="content">
            <TableOrder sendItemDetailOrder={sendItemDetailOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

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
export const Admin = () => {
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
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
  });
  const series = [
    {
      name: "series-1",
      data: [90, 10, 30, 35, 70, 65, 50, 91, 70, 28, 50, 100],
    },
  ];
  const sendItemDetailOrder = (item) => {
    setItemDetail(item);
    setCheckFormDetail(true);
  };
  return (
    <div className="_loading_overlay_wrapper css-79elbk">
      {/* {checkFormDetail && <FormDetailOrder ItemDetail={ItemDetail} />} */}
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
            <Chart
              options={options}
              series={series}
              type="area"
              width="100%"
              height="380"
            />
            {/* <TableOrder sendItemDetailOrder={sendItemDetailOrder} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

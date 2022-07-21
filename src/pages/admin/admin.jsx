import React, { useState } from "react";
import { Navbar } from "../../components/admin/content/navbar";
import "./admin.scss";
import Chart from "react-apexcharts";
import { NavbarAdmin } from "../../components/admin/layout/navbar";
import { Card } from "../../components/admin/content/card";

export const Admin = () => {
  const dataProductCard = [
    {
      text: "TỔNG SỐ NGƯỜI BÁN",
      count: 337,
    },
    {
      text: "TỔNG SỐ DANH MỤC",
      count: 259,
    },
    {
      text: "TỔNG SỐ SẢN PHẨM",
      count: 1191,
    },
    {
      text: "TỔNG SỐ ĐƠN HÀNG",
      count: 2529,
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
  return (
    <div className="_loading_overlay_wrapper css-79elbk">
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
          </div>
        </div>
      </div>
    </div>
  );
};

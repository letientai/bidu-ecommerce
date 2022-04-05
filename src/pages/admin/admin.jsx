import React, { useState } from "react";
import { Navbar } from "../../components/admin/content/navbar";
import "./admin.scss";
import Chart from "react-apexcharts";

export const Admin = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  const series = [
    {
      name: "series-1",
      data: [90, 40, 76, 10, 125, 5, 40, 91, 80],
    },
  ];
  return (
    <div className="_loading_overlay_wrapper css-79elbk">
      <div className="main-content">
        <Navbar />
        <div className="chart">
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
  );
};

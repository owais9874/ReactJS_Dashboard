import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "$69,700 Projects Earnings in September",
  pieHole: 0.4,
  is3D: false,
  chartArea: { width: "70%", height: "200px" },
};

const DonutChart = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        // width="70%"
        // height="200px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default DonutChart;

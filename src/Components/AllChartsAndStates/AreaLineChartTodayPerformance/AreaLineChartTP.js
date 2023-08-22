import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "80%" },
};

const AreaLineChartTP = () => {
  return (
    <div>
      <Chart
        chartType="LineChart"
        // width="100%"
        // height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default AreaLineChartTP;

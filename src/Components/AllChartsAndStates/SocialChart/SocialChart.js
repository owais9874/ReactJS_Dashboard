import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

// import Faker from 'faker';
import { faker } from '@faker-js/faker';

function getData() {
  return [
    ["Age", "Weight"],
    ...Array.from({ length: 16 }, () => [
      faker.datatype.number({ min: 1, max: 100 }),
      faker.datatype.number({ min: 1, max: 100 }),
    ]),
  ];
}

export const options = {
  colors: ["#8e0152", "#276419"],
  pointSize: 10,
  animation: {
    duration: 1000,
    easing: "out",
    startup: true,
  },
  vAxis: {
    viewWindow: {
      max: -10,
      min: 100,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: -10,
    },
  },
  legend: { position: "none" },
  enableInteractivity: false,
  chartArea: { width: "100%" },
};

const SocialChart = () => {
  const [chartData, setChartData] = useState(getData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
    }, 900);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default SocialChart;

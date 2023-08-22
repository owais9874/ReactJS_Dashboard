import React, { useRef } from "react";
import "./PerformanceToday.css";
import { AreaLineChartTP } from "../AllChartsAndStates";

const PerformanceToday = () => {
  const dateInputRef = useRef(null);

  return (
    <section class="performance-apex-chart m-20">
      <div class="apexchart">
        <div class="performance-btn-filter">
          <div class="performance-today">
            <h3>Performance</h3>
            <span>1,046 Inbound Calls today</span>
          </div>
          <div class="filter-btn">
            <input
              style={{ outline: "none", border: "none" }}
              type="date"
              ref={dateInputRef}
            />
          </div>
        </div>
        <div class="apex-chart">
          <AreaLineChartTP />
        </div>
      </div>
    </section>
  );
};

export default PerformanceToday;

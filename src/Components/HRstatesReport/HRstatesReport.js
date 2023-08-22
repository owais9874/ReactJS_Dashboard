import React from "react";
import "./HRstatesReport.css";
import { MapChart } from "../AllChartsAndStates";

const HRstatesReport = () => {
  return (
    <div class="hr-stats-report">
      <div class="state-price">
        <h3>Human Resources</h3>
        <span>Reports by states and ganders</span>
      </div>
      <MapChart/>
      {/* <div class="report-states-chart">
        <div id="lastchart"></div>
      </div> */}
    </div>
  );
};

export default HRstatesReport;

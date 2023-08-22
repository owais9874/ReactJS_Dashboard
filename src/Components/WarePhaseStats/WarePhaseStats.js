import React from "react";
import "./WarePhaseStats.css";
import { SocialChart } from "../AllChartsAndStates";

const WarePhaseStats = () => {
  return (
    <div class="ware-phase-stats-chart">
      <div class="state-price">
        <h3>Warephase stats</h3>
        <span>8k social visitors</span>
      </div>
      <div class="social-chart">
        <SocialChart />
      </div>
    </div>
  );
};

export default WarePhaseStats;

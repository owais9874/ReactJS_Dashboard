import React from "react";
import "./PerformanceOverview.css";
import { BubbleChartMonth, BubbleChartWeek } from "../AllChartsAndStates";

const PerformanceOverview = () => {
  return (
    <div class="performance-bubble-chart m-20">
      <div class="performance-heading">
        <div class="performance-overview">
          <h3>Performance Overview</h3>
          <span>Users from all channels</span>
        </div>
        <div class="performance-overview">
          <div
            class="nav nav-pills mb-3 nav-s4 authors-nav-tabs"
            id="pills-tab"
            role="tablist"
          >
            <button
              class="achievement-tabs nav-link"
              id="pills-Month-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Month"
              type="button"
              role="tab"
              aria-controls="pills-Month"
              aria-selected="true"
            >
              Month
            </button>

            <button
              class="achievement-tabs nav-link active"
              id="pills-Week-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Week"
              type="button"
              role="tab"
              aria-controls="pills-Week"
              aria-selected="false"
            >
              Week
            </button>
          </div>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade"
          id="pills-Month"
          role="tabpanel"
          aria-labelledby="pills-Month-tab"
        >
          <div class="bubblechart-month">
            <BubbleChartMonth />
          </div>
        </div>
        <div
          class="tab-pane fade show active"
          id="pills-Week"
          role="tabpanel"
          aria-labelledby="pills-Week-tab"
        >
          <div class="bubblechart-week">
            <BubbleChartWeek />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;

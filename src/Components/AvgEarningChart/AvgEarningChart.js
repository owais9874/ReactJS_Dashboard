import React from "react";
import "./AvgEarningChart.css";
import {
  AvgEarningChart1,
  AvgEarningChart2,
  AvgEarningChart3,
  AvgEarningChart4,
  AvgEarningChart5,
} from "../AllChartsAndStates";

const AvgEarningChart = () => {
  return (
    <div class="stats-chart m-20">
      <div class="state-price">
        <h3>
          <span>$</span>3,274.94
        </h3>
        <span>Avg. Agent Earnings</span>
      </div>
      <div class="state-days">
        <div
          class="nav nav-pills mb-3 nav-s4 state-btn"
          id="pills-tabs"
          role="tablist"
        >
          <button
            class="state-tabs nav-link active"
            id="pills-1d-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-1d"
            type="button"
            role="tab"
            aria-controls="pills-1d"
            aria-selected="true"
          >
            1-Day
          </button>

          <button
            class="state-tabs nav-link"
            id="pills-5d-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-5d"
            type="button"
            role="tab"
            aria-controls="pills-5d"
            aria-selected="false"
          >
            5-Day
          </button>

          <button
            class="state-tabs nav-link"
            id="pills-1m-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-1m"
            type="button"
            role="tab"
            aria-controls="pills-1m"
            aria-selected="false"
          >
            1-Month
          </button>

          <button
            class="state-tabs nav-link"
            id="pills-5m-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-5m"
            type="button"
            role="tab"
            aria-controls="pills-5m"
            aria-selected="false"
          >
            5-Month
          </button>

          <button
            class="state-tabs nav-link"
            id="pills-1y-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-1y"
            type="button"
            role="tab"
            aria-controls="pills-1y"
            aria-selected="false"
          >
            1-Year
          </button>
        </div>
      </div>
      <div class="state-charts">
        <div class="tab-content" id="pills-tabsContent">
          <div
            class="tab-pane fade show active"
            id="pills-1d"
            role="tabpanel"
            aria-labelledby="pills-1d-tab"
          >
            <div class="chart-1day">
              <AvgEarningChart1 />
            </div>
            <div class="state-details">
              <ul>
                <li class="state-time">
                  <a href="/">2:30 PM</a>
                </li>
                <li class="state-total">$2,756.26</li>
                <li class="state-danger">-139.34</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:10 PM</a>
                </li>
                <li class="state-total">$3,207.03</li>
                <li class="state-success">+576.24</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:55 PM</a>
                </li>
                <li class="state-total">$3,274.94</li>
                <li class="state-success">+124.03</li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-5d"
            role="tabpanel"
            aria-labelledby="pills-5d-tab"
          >
            <div class="chart-5day">
              <AvgEarningChart2 />
            </div>
            <div class="state-details">
              <ul>
                <li class="state-time">
                  <a href="/">4:30 PM</a>
                </li>
                <li class="state-total">$2,345.45</li>
                <li class="state-success">+134.02</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">11:35 AM</a>
                </li>
                <li class="state-total">$756.26</li>
                <li class="state-primary">-124.03</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:30 PM</a>
                </li>
                <li class="state-total">$1,756.26</li>
                <li class="state-danger">+144.04</li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-1m"
            role="tabpanel"
            aria-labelledby="pills-1m-tab"
          >
            <div class="chart-1month">
              <AvgEarningChart3 />
            </div>
            <div class="state-details">
              <ul>
                <li class="state-time">
                  <a href="/">4:30 PM</a>
                </li>
                <li class="state-total">$2,345.45</li>
                <li class="state-success">+134.02</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">11:35 AM</a>
                </li>
                <li class="state-total">$756.26</li>
                <li class="state-primary">-124.03</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:30 PM</a>
                </li>
                <li class="state-total">$1,756.26</li>
                <li class="state-danger">+144.04</li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-5m"
            role="tabpanel"
            aria-labelledby="pills-5m-tab"
          >
            <div class="chart-5month">
              <AvgEarningChart4 />
            </div>
            <div class="state-details">
              <ul>
                <li class="state-time">
                  <a href="/">4:30 PM</a>
                </li>
                <li class="state-total">$2,345.45</li>
                <li class="state-success">+134.02</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">11:35 AM</a>
                </li>
                <li class="state-total">$756.26</li>
                <li class="state-primary">-124.03</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:30 PM</a>
                </li>
                <li class="state-total">$1,756.26</li>
                <li class="state-danger">+144.04</li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-1y"
            role="tabpanel"
            aria-labelledby="pills-1y-tab"
          >
            <div class="chart-1year">
              <AvgEarningChart5 />
            </div>
            <div class="state-details">
              <ul>
                <li class="state-time">
                  <a href="/">4:30 PM</a>
                </li>
                <li class="state-total">$2,345.45</li>
                <li class="state-success">+134.02</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">11:35 AM</a>
                </li>
                <li class="state-total">$756.26</li>
                <li class="state-primary">-124.03</li>
              </ul>
              <ul>
                <li class="state-time">
                  <a href="/">3:30 PM</a>
                </li>
                <li class="state-total">$1,756.26</li>
                <li class="state-danger">+144.04</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgEarningChart;

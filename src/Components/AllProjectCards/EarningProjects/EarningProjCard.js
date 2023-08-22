import React from "react";
import "./EarningProjCard.css";
import { DonutChart } from "../../AllChartsAndStates";

const EarningProjCard = () => {
  return (
    <div className="default-card ml-10 mt-20 mb-10 mr-20">
      <div className="project-earning all-pr-card ">
        {/* <div className="earning-project cards-top">
          <span>$</span>
          <h3 className="earning-count">69,700</h3>
        </div>
        <span>Projects Earnings in September</span> */}
        {/* <div className="earning-card"> */}
          <div className="row g-0">
            {/* <div className="col-md-3"> */}
              <div className="earning-cycle">
                {/* <div className="chartcycle"> */}
                  {/* <canvas id="canvas1"></canvas> */}
                  <DonutChart />
                </div>
              {/* </div> */}
            {/* </div> */}
            {/* <div className="col-md-9">
              <div className="all-earning-service">
                <div className="earning-service1 earning-service">
                  <div>
                    <span>Leaf CRM</span>
                  </div>
                  <div>
                    <span className="service-price">$7,600</span>
                  </div>
                </div>
                <div className="earning-service2 earning-service">
                  <div>
                    <span>Mivy App</span>
                  </div>
                  <div>
                    <span className="service-price">$2,800</span>
                  </div>
                </div>
                <div className="earning-service3 earning-service">
                  <div>
                    <span>Others</span>
                  </div>
                  <div>
                    <span className="service-price">$45,000</span>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default EarningProjCard;

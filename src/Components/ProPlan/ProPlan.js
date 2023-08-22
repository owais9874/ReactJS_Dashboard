import React from "react";
import "./ProPlan.css";
import PlanImg from "../../assist/images/upgrade-dark.svg";

const ProPlan = () => {
  return (
    <div class="pro-plan m-20">
      <div class="pro-plan-heading">
        <h2>Try our all new Enviroment with</h2>
        <h2>
          <span>Pro Plan</span> for Free
        </h2>
      </div>
      <div class="pro-plan-btn">
        <a href="/" type="button">
          Upgrade Now
        </a>
      </div>
      <img src={PlanImg} alt="" class="plan-img" />
    </div>
  );
};

export default ProPlan;

import React from "react";

import "./ActiveProjCard.css";

const ActiveProjCard = () => {
  return (
    <div className="default-card ml-20 mt-20 mb-10 mr-10">
      <div className="project-card">
        <div className="active-project cards-top">
          <h3 className="active-count">69</h3>
          <span>Active Project</span>
        </div>
        <div className="pending-project">
          <span>43 Pending</span>
          <span>72%</span>
        </div>
        <div className="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "72%" }}
            aria-valuenow="72"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjCard;

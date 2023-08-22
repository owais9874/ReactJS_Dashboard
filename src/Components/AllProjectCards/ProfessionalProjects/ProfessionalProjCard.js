import React from "react";
import "./ProfessionalProjCard.css";
import proImg1 from "../../../assist/images/300-12.jpg";
import proImg2 from "../../../assist/images/300-11.jpg";
import proImg3 from "../../../assist/images/300-9.jpg";
import proImg4 from "../../../assist/images/300-6.jpg";
import proImg5 from "../../../assist/images/300-2.jpg";
import proImg6 from "../../../assist/images/300-14.jpg";


const ProfessionalProjCard = () => {
  return (
    <div className="default-card ml-20 mt-10 mr-10">
      <div class="project-professional all-pr-card ">
        <div class="professional-project cards-top">
          <h3 class="professional-count">357</h3>
          <span>Professionals</span>
        </div>
        <div class="todays-project">
          <span>Today’s Heroes</span>
        </div>
        <div class="professional-img">
          <ul>
            <li>
              <a href="/">
                <img src={proImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={proImg2} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={proImg3} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={proImg4} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={proImg5} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
              <img src={proImg6} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProjCard;

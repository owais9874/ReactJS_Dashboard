import React from "react";
import "./InProcessProject.css"

import inProcessImg from "../../assist/images/img-65.jpg";
import managerImg from "../../assist/images/300-3.jpg";
import allManagerImg1 from "../../assist/images/300-12.jpg";
import allManagerImg2 from "../../assist/images/300-11.jpg";
import allManagerImg3 from "../../assist/images/300-9.jpg";
import { BiDollar, BiLinkExternal } from "react-icons/bi";

const InProcessProject = () => {
  return (
    <section class="project-inprocess m-20">
      <div class="row">
        <div class="col-md-6">
          <div class="inprocess-img">
            <img src={inProcessImg} alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="inprocess-featured">
            <div class="featured-degree">
              <span>Featured</span>
              <h3>9 Degree</h3>
            </div>
            <button class="inprocess-btn">In Process</button>
          </div>
          <div class="manager-budget">
            <div class="manager">
              <img src={managerImg} alt="" />
              <div class="manager-name">
                <span>Manager</span>
                <a href="/">Robert Fox</a>
              </div>
            </div>
            <div class="Budget">
              <BiDollar/>
              <div class="manager-name">
                <span>Budget</span>
                <a href="/">$64.800</a>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="inprocess-txt">
            Flat cartoony illustrations with vivid unblended colors and
            asymmetrical beautiful purple hair lady
          </div>
          <div class="date-budget">
            <div class="due-date">
              Feb 6, 2021
              <span>Due Date</span>
            </div>
            <div class="project-price">
              $ 284,900
              <span>Budget</span>
            </div>
          </div>
          <div class="all-manager-img-proj">
            <ul>
              <li>
                <a href="/">
                  <img src={allManagerImg1} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={allManagerImg2} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={allManagerImg3} alt="" />
                </a>
              </li>
            </ul>
            <a href="/" class="project-view">
              View Project <BiLinkExternal/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InProcessProject;

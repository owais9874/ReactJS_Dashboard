import React from "react";
import "./StatesAndHistory.css";
import { BiLinkExternal } from "react-icons/bi";

import autherImg1 from "../../assist/images/img-40.jpg"
import autherImg2 from "../../assist/images/img-65.jpg"
import autherImg3 from "../../assist/images/img-47.jpg"
import autherImg4 from "../../assist/images/img-49.jpg"
import autherImg5 from "../../assist/images/img-48.jpg"

const StatesAndHistory = () => {
  return (
    <div class="projects-state">
      <div class="state-heading">
        <div class="state-update">
          <h3>Projects Stats</h3>
          <span>Updated 37 minutes ago</span>
        </div>
        <div class="state-history">
          <a href="/" type="button">
            History
          </a>
        </div>
      </div>
      <div class="projects-state-details">
        <ul>
          <li class="state-item">ITEM</li>
          <li class="state-budget">BUDGET</li>
          <li class="state-progress">PROGRESS</li>
          <li class="state-status">STATUS</li>
          <li class="state-chart">CHART</li>
          <li class="state-view">VIEW</li>
        </ul>
        <ul style={{ borderBottom: "1px dashed" }}>
          <li class="state-item">
            <div class="auther-name-img">
              <img src={autherImg1} alt="" />
              <div>
                <a href="/">Arlene McCoy</a>
                <span>London</span>
              </div>
            </div>
          </li>
          <li class="state-budget">$32,400</li>
          <li class="state-progress">9.2%</li>
          <li class="state-status">In Process</li>
          <li class="state-chart">---------</li>
          <li class="state-view">
            <div class="auther-view">
              <a href="/" type="button">
                <BiLinkExternal />
              </a>
            </div>
          </li>
        </ul>
        <ul style={{ borderBottom: "1px dashed" }}>
          <li class="state-item">
            <div class="auther-name-img">
              <img src={autherImg2} alt="" />
              <div>
                <a href="/">Arlene McCoy</a>
                <span>London</span>
              </div>
            </div>
          </li>
          <li class="state-budget">$256,910</li>
          <li class="state-progress">0.4%</li>
          <li class="state-status">On Hold</li>
          <li class="state-chart">---------</li>
          <li class="state-view">
            <div class="auther-view">
              <a href="/" type="button">
                <BiLinkExternal />
              </a>
            </div>
          </li>
        </ul>
        <ul style={{ borderBottom: "1px dashed" }}>
          <li class="state-item">
            <div class="auther-name-img">
              <img src={autherImg3} alt="" />
              <div>
                <a href="/">Mivy App</a>
                <span>Jane Cooper</span>
              </div>
            </div>
          </li>
          <li class="state-budget">$8,220</li>
          <li class="state-progress">In Process</li>
          <li class="state-status">9.2%</li>
          <li class="state-chart">---------</li>
          <li class="state-view">
            <div class="auther-view">
              <a href="/" type="button">
                <BiLinkExternal />
              </a>
            </div>
          </li>
        </ul>
        <ul style={{ borderBottom: "1px dashed" }}>
          <li class="state-item">
            <div class="auther-name-img">
              <img src={autherImg4} alt="" />
              <div>
                <a href="/">Arlene McCoy</a>
                <span>London</span>
              </div>
            </div>
          </li>
          <li class="state-budget">$74,000</li>
          <li class="state-progress">9.2%</li>
          <li class="state-status">Complated</li>
          <li class="state-chart">---------</li>
          <li class="state-view">
            <div class="auther-view">
              <a href="/" type="button">
                <BiLinkExternal />
              </a>
            </div>
          </li>
        </ul>
        <ul>
          <li class="state-item">
            <div class="auther-name-img">
              <img src={autherImg5} alt="" />
              <div>
                <a href="/">Arlene McCoy</a>
                <span>London</span>
              </div>
            </div>
          </li>
          <li class="state-budget">$183,300</li>
          <li class="state-progress">0.4%</li>
          <li class="state-status">In Process</li>
          <li class="state-chart">---------</li>
          <li class="state-view">
            <div class="auther-view">
              <a href="/" type="button">
                <BiLinkExternal />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatesAndHistory;

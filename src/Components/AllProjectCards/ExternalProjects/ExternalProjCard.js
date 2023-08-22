import React from "react";
import "./ExternalProjCard.css";
import { FaAngleRight } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ExternalProjCard = () => {
  return (
    <div className="default-card ml-10 mt-10 mr-20">
      <div class="project-external all-pr-card ">
        <div class="external-project cards-top">
          <h3 class="external-card">External Links</h3>
          <div class="external-actionlink">
            <ul>
              <li class=" project-drop">
                <button class="external" type="button">
                  ...{" "}
                </button>
                <div
                  class="external-link-menu"
                  style={{ display: "none" }}
                >
                  <p>Quick Actions</p>
                  <ul class="quick-link">
                    <li class="link-card">
                      <a class="new-group" href="/" style={{ content: "" }}>
                        New Ticket
                      </a>
                    </li>
                    <li class="link-card">
                      <a class="new-group" href="/" style={{ content: "" }}>
                        New Customer
                      </a>
                    </li>
                    <li class="new-external-link link-card">
                      <a class="new-group" href="/">
                        New Group <FaAngleRight />
                      </a>
                      <ul class="inner-external-link">
                        <li>
                          <a href="/" style={{ content: "" }}>
                            Admin Group
                          </a>
                        </li>
                        <li>
                          <a href="/">Staff Group</a>
                        </li>
                        <li>
                          <a href="/">Member Group</a>
                        </li>
                      </ul>
                    </li>
                    <li class="link-card">
                      <a class="new-group" href="/" style={{ content: "" }}>
                        New Contact
                      </a>
                    </li>
                  </ul>
                  <button class="generate-reports">Generate Reports</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="external-link link-1">
          <a href="/">Avg. Client Rating</a>
          <a href="/" type="button" class="external-btn">
            <BiLinkExternal />
          </a>
        </div>
        <div class="external-link link-2">
          <a href="/">Instagram Followers</a>
          <a href="/" type="button" class="external-btn">
            <BiLinkExternal />
          </a>
        </div>
        <div class="external-link link-3">
          <a href="/">Google Ads CPC</a>
          <a href="/" type="button" class="external-btn">
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExternalProjCard;

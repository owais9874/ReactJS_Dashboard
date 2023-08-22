import React from "react";
import "./AuthorsAchievement.css";

import autherImg1 from "../../assist/images/300-12.jpg";
import autherImg2 from "../../assist/images/300-9.jpg";
import autherImg3 from "../../assist/images/300-2.jpg";
import autherImg4 from "../../assist/images/300-11.jpg";
import autherImg5 from "../../assist/images/300-6.jpg";
import autherImg6 from "../../assist/images/300-14.jpg";
import autherImg7 from "../../assist/images/300-10.jpg";
import autherImg8 from "../../assist/images/300-6.jpg";
import autherImg9 from "../../assist/images/300-7.jpg";
import autherImg10 from "../../assist/images/300-13.jpg";
import autherImg11 from "../../assist/images/300-17.jpg";
import autherImg12 from "../../assist/images/300-20.jpg";
import autherImg13 from "../../assist/images/300-11.jpg";
import autherImg14 from "../../assist/images/300-1.jpg";
import autherImg15 from "../../assist/images/300-4.jpg";
import autherImg16 from "../../assist/images/300-3.jpg";
import autherImg17 from "../../assist/images/300-21.jpg";
import autherImg18 from "../../assist/images/300-23.jpg";
import autherImg19 from "../../assist/images/300-25.jpg";
import autherImg20 from "../../assist/images/300-30.jpg";
import {
  BiCloudUpload,
  BiLinkExternal,
  BiMobileAlt,
  BiPaperPlane,
  BiShare,
  BiSolidBank,
} from "react-icons/bi";

const AuthorsAchievement = () => {
  return (
    <section className="authors m-20">
      <div className="row">
        <div className="col-md-7">
          <div className="authors-section">
            <div className="authors-achievement">
              <div>
                <h3>Authors Achievements</h3>
                <span>Avg. 69.34% Conv. Rate</span>
              </div>
              <div className="external-actionlink">
                <ul>
                  <li className=" project-drop">
                    <button className="external" type="button">
                      ...{" "}
                    </button>
                    <div
                      className=" external-link-menu external-link-authors"
                      style={{ display: "none" }}
                    >
                      <p>Quick Actions</p>
                      <ul className="quick-link">
                        <li className="link-card">
                          <a
                            className="new-group"
                            href="/"
                            style={{ content: "" }}
                          >
                            New Ticket
                          </a>
                        </li>
                        <li className="link-card">
                          <a
                            className="new-group"
                            href="/"
                            style={{ content: "" }}
                          >
                            New Customer
                          </a>
                        </li>
                        <li className="new-external-link link-card inner-link-authors">
                          <a className="new-group" href="/">
                            New Group
                          </a>
                          <ul className="inner-external-link">
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
                        <li className="link-card">
                          <a
                            className="new-group"
                            href="/"
                            style={{ content: "" }}
                          >
                            New Contact
                          </a>
                        </li>
                      </ul>
                      <button className="generate-reports">
                        Generate Reports
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="authors-achievement-section">
              <div
                className="nav nav-pills mb-3 nav-s4 authors-nav-tabs"
                id="pills-tab"
                role="tablist"
                style={{justifyContent:"space-between"}}
              >
                <button
                  className="achievement-tabs nav-link active"
                  id="pills-saas-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-saas"
                  type="button"
                  role="tab"
                  aria-controls="pills-saas"
                  aria-selected="true"
                >
                  <div className="icon-name">
                    <BiCloudUpload />
                  </div>
                  <span>SaaS</span>
                </button>

                <button
                  className="achievement-tabs nav-link"
                  id="pills-crypto-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-crypto"
                  type="button"
                  role="tab"
                  aria-controls="pills-crypto"
                  aria-selected="false"
                >
                  <div className="icon-name">
                    <BiSolidBank />
                  </div>
                  <span>Crypto</span>
                </button>

                <button
                  className="achievement-tabs nav-link"
                  id="pills-social-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-social"
                  type="button"
                  role="tab"
                  aria-controls="pills-social"
                  aria-selected="false"
                >
                  <div className="icon-name">
                    <BiShare />
                  </div>
                  <span>Social</span>
                </button>

                <button
                  className="achievement-tabs nav-link"
                  id="pills-mobile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mobile"
                  type="button"
                  role="tab"
                  aria-controls="pills-mobile"
                  aria-selected="false"
                >
                  <div className="icon-name">
                    <BiMobileAlt />
                  </div>
                  <span>Mobile</span>
                </button>

                <button
                  className="achievement-tabs nav-link"
                  id="pills-others-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-others"
                  type="button"
                  role="tab"
                  aria-controls="pills-others"
                  aria-selected="false"
                >
                  <div className="icon-name">
                    <BiPaperPlane />
                  </div>
                  <span>Others</span>
                </button>
              </div>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-saas"
                  role="tabpanel"
                  aria-labelledby="pills-saas-tab"
                >
                  <div className="steps-details">
                    <div className="achievement-tabs-details">
                      <ul>
                        <li className="auther">AUTHOR</li>
                        <li className="conv">CONV.</li>
                        <li className="chart">CHART</li>
                        <li className="view">VIEW</li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg1} alt="" />
                            <div>
                              <a href="/">Arlene McCoy</a>
                              <span>London</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">78.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg2} alt="" />
                            <div>
                              <a href="/">Jacob Jones</a>
                              <span>Poland</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">92.56%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg3} alt="" />
                            <div>
                              <a href="/">Jane Cooper</a>
                              <span>Monaco</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">63.83%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="auther-person"
                      style={{ border: "none !important" }}
                    >
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg4} alt="ss" />
                            <div>
                              <a href="/">Jacob Jones</a>
                              <span>New York</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">58.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-crypto"
                  role="tabpanel"
                  aria-labelledby="pills-crypto-tab"
                >
                  <div className="steps-details">
                    <div className="achievement-tabs-details">
                      <ul>
                        <li className="auther">AUTHOR</li>
                        <li className="conv">CONV.</li>
                        <li className="chart">CHART</li>
                        <li className="view">VIEW</li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg5} alt="" />
                            <div>
                              <a href="/">Jane Cooper</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">68.54%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg6} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Iceland</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">63.16%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg7} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Kiribati</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">55.83%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="auther-person"
                      style={{ border: "none !important" }}
                    >
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg8} alt="" />
                            <div>
                              <a href="/">Guy Hawkins</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">78.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-social"
                  role="tabpanel"
                  aria-labelledby="pills-social-tab"
                >
                  <div className="steps-details">
                    <div className="achievement-tabs-details">
                      <ul>
                        <li className="auther">AUTHOR</li>
                        <li className="conv">CONV.</li>
                        <li className="chart">CHART</li>
                        <li className="view">VIEW</li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg9} alt="" />
                            <div>
                              <a href="/">Jane Cooper</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">68.54%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg10} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Iceland</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">63.16%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg11} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Kiribati</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">55.83%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="auther-person"
                      style={{ border: "none !important" }}
                    >
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg12} alt="" />
                            <div>
                              <a href="/">Guy Hawkins</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">78.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-mobile"
                  role="tabpanel"
                  aria-labelledby="pills-mobile-tab"
                >
                  <div className="steps-details">
                    <div className="achievement-tabs-details">
                      <ul>
                        <li className="auther">AUTHOR</li>
                        <li className="conv">CONV.</li>
                        <li className="chart">CHART</li>
                        <li className="view">VIEW</li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg13} alt="" />
                            <div>
                              <a href="/">Jane Cooper</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">68.54%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg14} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Iceland</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">63.16%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg15} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Kiribati</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">55.83%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="auther-person"
                      style={{ border: "none !important" }}
                    >
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg16} alt="" />
                            <div>
                              <a href="/">Guy Hawkins</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">78.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-others"
                  role="tabpanel"
                  aria-labelledby="pills-others-tab"
                >
                  <div className="steps-details">
                    <div className="achievement-tabs-details">
                      <ul>
                        <li className="auther">AUTHOR</li>
                        <li className="conv">CONV.</li>
                        <li className="chart">CHART</li>
                        <li className="view">VIEW</li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg17} alt="" />
                            <div>
                              <a href="/">Jane Cooper</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">68.54%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg18} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Iceland</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">63.16%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="auther-person">
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg19} alt="" />
                            <div>
                              <a href="/">Esther Howard</a>
                              <span>Kiribati</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">55.83%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="auther-person"
                      style={{ border: "none !important" }}
                    >
                      <ul>
                        <li className="auther">
                          <div className="auther-name-img">
                            <img src={autherImg20} alt="" />
                            <div>
                              <a href="/">Guy Hawkins</a>
                              <span>Haiti</span>
                            </div>
                          </div>
                        </li>
                        <li className="conv">
                          <div className="auther-conv">78.34%</div>
                        </li>
                        <li className="chart">
                          <div className="auther-chart">---------</div>
                        </li>
                        <li className="view">
                          <div className="auther-view">
                            <a href="/" type="button">
                              <BiLinkExternal />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsAchievement;

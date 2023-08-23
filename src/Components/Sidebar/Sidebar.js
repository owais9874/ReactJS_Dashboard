import React from "react";
import "./Sidebar.css";

import {
  // FaAngleDoubleLeft,
  FaAngleRight,
  FaBook,
  FaCalendarAlt,
  FaFile,
  FaFileImage,
  FaFolder,
  FaPen,
  FaSearchDollar,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import {
  BiGrid,
  BiUser,
  BiSticker,
  BiGlobe,
  BiListCheck,
  BiGridHorizontal,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <ul>
              <li className="sidebar-dropdown active">
                <div className="hkdi">
                  <a href="#Dashboard">
                    <BiGrid />
                    <span>Dashboard</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu" style={{ display: "block" }}>
                  <ul>
                    <li className="defaultactive">
                      <Link to="main" className="active">
                        Main
                      </Link>
                    </li>
                    <li className="defaultactive">
                      <Link to="login"> Login</Link>
                    </li>
                    <li className="defaultactive">
                      <Link to="signUp">Registration</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu">
                <span>Pages</span>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaUser />
                    <span>User Profile</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Overview</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Projects</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Campaigns</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Documents</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Followers</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Activity</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <BiUser />
                    <i className="bi bi-person"></i>
                    <span>Account</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Overview</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Settings</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Security</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Activity</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Billing</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Referrals</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">API Keys</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Logs</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <BiSticker />
                    <span>Authentication</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="submenu-dropdown">
                      <div className="hkdi2">
                        <a href="#a">
                          <span>Corporate Layout</span>
                        </a>
                        <FaAngleRight className="arrowRight" />
                      </div>
                      <div className="submenu-inner-menu">
                        <ul>
                          <li className="defaultactive">
                            <a href="#a">Sign-in</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Sign-up</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Two-steps</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Reset Password</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">New Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="submenu-dropdown">
                      <div className="hkdi2">
                        <a href="#a">
                          <span>Overlay Layout</span>
                        </a>
                        <FaAngleRight className="arrowRight" />
                      </div>
                      <div className="submenu-inner-menu">
                        <ul>
                          <li className="defaultactive">
                            <a href="#a">Sign-in</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Sign-up</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Two-steps</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Reset Password</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">New Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="submenu-dropdown">
                      <div className="hkdi2">
                        <a href="#a">
                          <span>Overlay Layout</span>
                        </a>
                        <FaAngleRight className="arrowRight" />
                      </div>
                      <div className="submenu-inner-menu">
                        <ul>
                          <li className="defaultactive">
                            <a href="#a">Sign-in</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Sign-up</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Two-steps</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Reset Password</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">New Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="submenu-dropdown">
                      <div className="hkdi2">
                        <a href="#a">
                          <span>Overlay Layout</span>
                        </a>
                        <FaAngleRight className="arrowRight" />
                      </div>
                      <div className="submenu-inner-menu">
                        <ul>
                          <li className="defaultactive">
                            <a href="#a">Sign-in</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Sign-up</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Two-steps</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Reset Password</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">New Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="submenu-dropdown">
                      <div className="hkdi2">
                        <a href="#a">
                          <span>Overlay Layout</span>
                        </a>
                        <FaAngleRight className="arrowRight" />
                      </div>
                      <div className="submenu-inner-menu">
                        <ul>
                          <li className="defaultactive">
                            <a href="#a">Sign-in</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Sign-up</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Two-steps</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">Reset Password</a>
                          </li>
                          <li className="defaultactive">
                            <a href="#a">New Password</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Multi-steps Sign-up</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Welcome Message</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Verify Email</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Coming Soon</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaBook />
                    <span>Corporate</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">About</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Our Team</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Contact Us</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Licenses</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <BiGlobe />
                    <span>Social</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Feeds</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Activty</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Followers</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Settings</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaFileImage />
                    <span>Blog</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Blog Home</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Blog Post</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <BiListCheck />
                    <span>FAQ</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">FAQ classNameic</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">FAQ Extended</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaSearchDollar />
                    <span>Pricing</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Column Pricing</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Table Pricing</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaPen />
                    <span>Careers</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Careers List</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Careers Apply</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <FaShieldAlt />
                    <span>Utilities</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Modals</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Search</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Wizards</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <div className="hkdi">
                  <a href="#a">
                    <i className="bi bi-person"></i>
                    <BiGridHorizontal />
                    <span>Widgets</span>
                  </a>
                  <FaAngleRight className="arrowRight" />
                </div>
                <div className="sidebar-submenu">
                  <ul>
                    <li className="defaultactive">
                      <a href="#a">Lists</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Statictics</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Charts</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Mixed</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Tables</a>
                    </li>
                    <li className="defaultactive">
                      <a href="#a">Feeds</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu">
                <span>APPS</span>
              </li>
              {/* <!-- ********************* DONE ********************* --> */}
              <li className="defaultactive">
                <a href="#a">
                  <FaFile />
                  <span>Documentation</span>
                </a>
              </li>
              <li className="defaultactive">
                <a href="#a">
                  <FaCalendarAlt />
                  <span>Calendar</span>
                </a>
              </li>
              <li className="defaultactive">
                <a href="#a">
                  <FaFolder />
                  <span>File Manager</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

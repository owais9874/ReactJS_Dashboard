import React, { useState } from "react";
import "./Navbar.css";

import logoMain from "../../assist/images/logo.png";

import {
  BiLogoDropbox,
  BiSearch,
  BiChat,
  BiBarChart,
  BiSolidUserAccount,
  BiBell,
} from "react-icons/bi";
import { BsList, BsX } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <header className="app-header topbar-dashboard page-conten">
      <div className="logo-topbar">
        <a href="/demos/react_js/Dashboard-owais">
          <img src={logoMain} alt="" />
        </a>
        <div className="fgr" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          {showMediaIcons ? (
            <button type="button" id="show-sidebar" className="sdmenu-link">
              <BsX />
            </button>
          ) : (
            <button type="button" id="close-sidebar" className="sdmenu-link">
              <BsList />
            </button>
          )}
        </div>
      </div>
      <div className="topbar-menu-icon">
        <ul>
          <li>
            <a href="#a">
              <BiSearch />
            </a>
          </li>
          <li>
            <a href="#a">
              <BiBell />
            </a>
          </li>
          <li>
            <a href="#a">
              <BiLogoDropbox />
            </a>
          </li>
          <li>
            <a href="#a">
              <BiChat />
            </a>
          </li>
          <li>
            <a href="#a">
              <BiBarChart />
            </a>
          </li>
          <li>
            <a href="#a">
              <FaMoon />
            </a>
          </li>
          <li>
            <a href="#a">
              <BiSolidUserAccount />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

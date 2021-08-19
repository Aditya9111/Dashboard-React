import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import "./SideNav.css";
import { IconContext } from "react-icons";
import NavBar from "../NavBar/NavBar";
import icon from "../../assets/icon.jpg";
import styled from "styled-components";

function SideNav() {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} color="#fff" />
        </Link>
        <NavBar />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img
                src={icon}
                alt="icon"
                width="52"
                height="52"
                className="image"
              />
            </Link>
            <div className="iconText">
              <p className="navText">Term</p>
              <p className="navTextWeight">Monitor</p>
            </div>
            <AiIcons.AiOutlineClose color="#fff" />
          </li>
          {SideNavData.map((item, index) => {
            return (
              <li
                key={index}
                className={item.cName}
                onClick={item.subNav && showSubNav}
              >
                <Link to={item.path}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>

                  {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideNav;

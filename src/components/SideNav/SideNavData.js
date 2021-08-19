import React from "react";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BootIcons from "react-icons/bs";
import "./SideNav.css";

export const SideNavData = [
  {
    title: "Add Keywords",
    path: "/addKeywords",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Matches",
    path: "/matches",
    icon: <BootIcons.BsFillPeopleFill />,
    cName: "nav-text",
  },
  {
    title: "Manage Sources",
    path: "/sources",
    icon: <FiIcons.FiCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Integration",
    path: "/integration",
    icon: <FiIcons.FiCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Alerts",
    path: "/alerts",
    icon: <FiIcons.FiCreditCard />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/setting",
    icon: <AiIcons.AiFillStar />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Billings",
        path: "/billings",
        icon: <FiIcons.FiCreditCard />,
      },
    ],
  },
];

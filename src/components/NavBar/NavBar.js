import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="heading">
          <p className="heading">KEYWORDS</p>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="SUBMIT →" />
          <span className="dot">A</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

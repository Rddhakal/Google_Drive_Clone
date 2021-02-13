import React from "react";
import "../styles/header.css";
import DriveBody from "./drivebody/DriveBody";
import logo from "../images/logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" className="logo-img" />
          <p>Drive</p>
        </div>
        <div className="search-container">
          <div className="search-field">
            <SearchIcon />
            <input type="text" placeholder="Search in Drive" />
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="header-icons">
          <HelpOutlineIcon />
          <SettingsIcon />
          <DialpadOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </header>
    </>
  );
}

export default Header;

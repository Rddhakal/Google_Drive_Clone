import React from "react";
import SidebarOption from "./SidebarOption";
import "../../styles/sidebar/sidebar.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
      <div className="new-btn"><AddIcon/> New</div>
        <SidebarOption icon={GroupOutlinedIcon} text="My Drive" />
        <SidebarOption icon={GroupOutlinedIcon} text="Share with Me" />
        <SidebarOption icon={DeleteOutlinedIcon} text="Recent" />
        <SidebarOption icon={StarBorderOutlinedIcon} text="Started" />
        <SidebarOption icon={DeleteOutlinedIcon} text="Trash" />
        <div className="storage">
          <CloudOutlinedIcon />
          <p>Storage</p>
        </div>
        <div className="storage-progress">
          <div className="progress"></div>
          <p>0 bytes of 15GB used</p>
          <Button variant="outlined" className="storage-btn" color="primary">
            Buy Storage
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import "../../styles/drivebody/drivebodyright.css";
import CalendarIcon from "../../images/calendar.png";
import KeepsIcon from "../../images/keep.png";
import TasksIcon from "../../images/tasks.png";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
const DriveBodyRight = () => {
  return (
    <>
      <div className="drive-right-container">
        <div className="icon">
          <img src={CalendarIcon} alt="" />
        </div>
        <div className="icon">
          <img src={KeepsIcon} alt="" />
        </div>
        <div className="icon">
          <img src={TasksIcon} alt="" />
        </div>
        <RemoveIcon />
        <div className="icon">
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default DriveBodyRight;

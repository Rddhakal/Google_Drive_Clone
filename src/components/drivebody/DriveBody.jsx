import React from "react";
import "../../styles/drivebody/drivebody.css";
import DriveBodyHeader from "./DriveBodyHeader";
import DriveFileBody from "./DriveFileBody";
import DriveBodyRight from './DriveBodyRight'
const DriveBody = () => {
  return (
    <>
      <div className="drive-body">
        <DriveBodyHeader />
        <DriveFileBody />
        <DriveBodyRight/>
      </div>
    </>
  );
};

export default DriveBody;

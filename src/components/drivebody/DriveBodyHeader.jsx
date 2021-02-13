import React from "react";
import "../../styles/drivebody/drivebodyheader.css";
import { Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ViewListOutlinedIcon from "@material-ui/icons/ViewListOutlined";
function DriveBodyHeader() {
  return (
    <>
      <div className="drive-body-header">
        <div className="my-drive">
          <Button color="primary" className="my-drive-btn">
            My Drive <ArrowDropDownIcon />
          </Button>
        </div>
        <div className="icons">
          <ViewListOutlinedIcon />
          <InfoOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default DriveBodyHeader;

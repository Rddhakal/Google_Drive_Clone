import React from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/drivebody/drivefilesupdate.css";
import DriveFilesUpdate from "./DriveFilesUpdate";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function DriveFileBody() {
  return (
    <>
      <table>
        <tr>
          <th>
            Name <ArrowDropDownIcon />
          </th>
          <th>Owner</th>
          <th>Last modified</th>
          <th>File size</th>
        </tr>
        <DriveFilesUpdate
          name="Images.pgn"
          size="19KB"
          owner="me"
          date="02/12/2021 me"
          type="image"
        />
        <DriveFilesUpdate
          name="Video.mp4"
          size="19MB"
          owner="me"
          date="03/12/2021 me"
          type="video"
        />
        <DriveFilesUpdate
          name="Music.mp3"
          size="2MB"
          owner="me"
          date="05/12/2021 me"
          type="music"
        />
      </table>
    </>
  );
}

export default DriveFileBody;

import React from "react";
import "../../styles/drivebody/drivefilesupdate.css";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
const DriveFilesUpdate = (props) => {
  return (
    <>
      <tr className="files-tr">
        <td className="file-name-td">
          {props.type == "image" ? (
            <ImageOutlinedIcon />
          ) : props.type == "video" ? (
            <VideoLibraryOutlinedIcon />
          ) : (
            <MusicNoteOutlinedIcon />
          )}
          <span>{props.name}</span>
        </td>
        <td>{props.owner}</td>
        <td>{props.date}</td>
        <td>{props.size}</td>
      </tr>
    </>
  );
};

export default DriveFilesUpdate;

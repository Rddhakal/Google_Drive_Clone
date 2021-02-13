import React from "react";
import "../../styles/sidebar/sidebaroption.css";
const SidebarOption = (props) => {
  return (
    <>
      <div className="option">
        <props.icon />
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default SidebarOption;

import React from "react";
import "../styles/home.css";
import Sidebar from "./sidebar/Sidebar";
import DriveBody from "../components/drivebody/DriveBody";
const Home = () => {
  return (
    <>
      <main>
        <Sidebar />
        <DriveBody />
      </main>
    </>
  );
};

export default Home;

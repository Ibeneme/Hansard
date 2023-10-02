import React from "react";
import "../../styling/funding.css";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "../../../components/Footer";
import CareersComponent from "../../components/research/careersComponent";
import Navbar from "../../../components/Navbar";

const Careers = () => {
  return (
    <div
      style={{
        backgroundColor: "#04122f",
        minHeight: "100vh",
      }}

    >
      <Navbar />
      <div>
        <div className="ikenna-careers-first-div">
          <h1 className="ikenna-funding-first-h1">Careers</h1>
        </div>
        <div className="careers-div">
          <CareersComponent />
          <CareersComponent />
          <CareersComponent />
          <CareersComponent />
          <CareersComponent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;

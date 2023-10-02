import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ComponentDepts from "../StudyOverview/UnderGraduatesStudy";

const Admissions = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="ikenna-funding-first-div">
          <h1 className="ikenna-funding-first-h1">Admissions</h1>
        </div>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <ComponentDepts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;

import React from "react";
import ComponentDepts from "../StudyOverview/UnderGraduatesStudy";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const CourseFinder = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Course Finder</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <ComponentDepts />
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default CourseFinder;

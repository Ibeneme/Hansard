import React from "react";
import "../../styling/academicCom.css";
import AcademicCalendars from "../../components/research/Academics";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const academicCalendarData = [
  ["Event", "Date"],
  ["Enrollment and Registration of New Students", "04-September-2023"],
  ["Registration of Returning Students Begins", "11-September-2023"],
  ["23C Semester Lectures Commence", "13-September-2023"],
  ["End of 23C Semester Registration", "25-September-2023"],
  ["Commencement of 23C Late Registration", "26-September-2023"],
  ["End of 23C Late Registration", "29-September-2023"],
  ["National Independence Day (Public Holiday)", "01-October-2023"],
  ["Commencement of 23C Very Late Registration", "03-October-2023"],
  ["End of 23C Very Late Registration, Adding and Dropping", "06-October-2023"],
  ["General Induction and Orientation of New Students", "24-October-2023"],
  ["Commencement of 23C Examination", "06-December-2023"],
  ["End of 23C Examination", "19-December-2023"],
  ["Release of Results", "05-January-2024"],
];

function AcademicCalendar() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Academic Calendar</h1>
      </div>
      <div>
        <AcademicCalendars />{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default AcademicCalendar;

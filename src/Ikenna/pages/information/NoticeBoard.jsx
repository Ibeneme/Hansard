import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const NoticeBoard = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Notice Board</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div"></div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default NoticeBoard;

import React from "react";
import "../../styling/funding.css";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "../../../components/Footer";
import FundingComponent from "../../components/research/FundingComponent";
import Navbar from "../../../components/Navbar";

const Funding = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="ikenna-funding-first-div">
          <h1 className="ikenna-funding-first-h1">Scholarship & Funding</h1>
        </div>
        <div className="ikenna-funding-second-div">
          <div className="ikenna-funding-third-div">
            <div className="ikenna-funding-fourth-div">
              <h5 className="ikenna-funding-third-h5">HENSARD UNIVERSITY </h5>
              <h2>SCHOLARSHIP OPPORTUNITIES</h2>
              <p>
                You can study in Hensard on fully funded or partially funded
                scholarships. Hensard offer scholarships to international
                students and local citizens every year and we have listed here
                some Scholarships in
              </p>
              <div
                style={{
                  marginTop: "48px",
                }}
              >
                <span className="ikenna-funding-span">
                  Apply Now <BiRightArrowAlt />
                </span>
              </div>
            </div>
            <div>
              <img
                className="funding-img"
                src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696044293/graduation-cost-expensive-education-scholarship_kpp00k.jpg"
                alt="mac"
              />
            </div>
          </div>
          <div>
            <FundingComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Funding;

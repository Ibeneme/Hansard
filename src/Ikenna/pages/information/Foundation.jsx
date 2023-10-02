import React from "react";
import Footer from "../../../components/Footer";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "../../../components/Navbar";

const HensardFoundation = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Hensard Foundation</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <h2>Our Hensard Foundation Scholarship</h2>
          <p>Our Hensard Foundation Scholarship</p>
          <div
            className="ikenna-funding-next-div"
            style={{
              marginTop: 24,
            }}
          >
            <div className="ikenna-funding-next-div-img">
              <img
                className="ikenna-funding-next-img-img"
                src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696050622/divaris-shirichena-04Rd4wrSI1M-unsplash_z0idpu.jpg"
                alt="grad"
              />
            </div>
            <div className="funding-right-red-box">
              <div>
                <h1>Hensard Foundation Scholarship</h1>
              </div>
              <div>
                <p
                  style={{
                    lineHeight: 2,
                  }}
                >
                  {" "}
                  Hensard Foundation Scholarship is for
                  non-Nigerian (or holders of citizenship other than Nigeria)
                  Master's applicants seeking on-campus admission to Hensard
                  University. The scholarship is only open to non-Nigerian
                  candidates admitted into any of Hensard’s Masters Programs and
                  shall be for a period of 18-months.
                </p>
              </div>

              <div
                style={{
                  marginTop: "48px",
                  marginBottom: "48px",
                }}
              >
                <span className="ikenna-funding-span-opposite">
                  Apply Now <BiRightArrowAlt />
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default HensardFoundation;

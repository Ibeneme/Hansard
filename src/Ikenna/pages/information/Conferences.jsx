import React from "react";
import Footer from "../../../components/Footer";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "../../../components/Navbar";
const Conferences = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Conference</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <img
            className="ikenna-news-img "
            src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696172515/WhatsApp_Image_2023-10-01_at_15.57.31_vtou8s.jpg"
            alt="conference"
          />
          <br /> <h3>5th CU-ICE Conference</h3>
          <h5>Theme: SUSTAINABLE ENTREPRENEURSHIP AND DEVELOPMENT GOALS</h5>
          <br />
          <p>Date: October 12-13, 2021 [ Virtual Conference ]</p>
          <br />{" "}
          <p>
            The Center for Entrepreneurship Development Studies (CEDS), Covenant
            University will host the fifth (5th) edition of her international
            conference on Entrepreneurship (CU-ICE). The conference is aimed at
            addressing essential economic and developmental issues in Africa
            FROM THE VIEW POINT OF ENTREPRENEURSHIP. This year CU-ICE is focused
            on discussing the fulfilment of some key sustainable development
            goals through entrepreneurial innovativeness. CU-ICE is an annual
            gathering of entrepreneurs, investors, researchers, policy makers,
            students and other start up champions in Africa to identify new ways
            of helping start-ups and existing firms to achieve stronger
            competitiveness.
          </p>
          <div
            style={{
              marginTop: "48px",
              marginBottom: "48px",
            }}
          >
            <span className="ikenna-funding-span">
              Apply Now <BiRightArrowAlt />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 28,
            }}
          >
            <FaXTwitter />
            <BsFacebook />
            <FaSquareInstagram />
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Conferences;

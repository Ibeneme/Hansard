import React from "react";
import MapContact from "../../components/research/Maps";
import { BiRightArrowAlt } from "react-icons/bi";
import "../../styling/maps.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const MapAndContact = () => {
  return (
    <div>
     <Navbar />
      <div>
        <div className="ikenna-funding-first-div">
          <h1 className="ikenna-funding-first-h1">Contact Us</h1>
        </div>
        {/* <div className="careers-div">
            <
          </div> 
        </div>*/}
        <div className="ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h3 className="ikenna-maps-address-h3">
                {" "}
                Hensard University Address
              </h3>
              <p className="ikenna-maps-address-p">
                1 Nanaye Dickson Road,
                <br />
                Toru-Orua, <br />
                Sagbama LGA, <br />
                Bayelsa State, <br />
                P.O. box 1036.
              </p>
              <br /> <br />
              <p className="ikenna-maps-address-p">
                Admissions:
                <br />
                Admissions@hensarduniversity.edu.ng
              </p>{" "}
              <br />
              <p className="ikenna-maps-address-p">
                Staff Recruitment:
                <br /> Recruitment@hensarduniversity.edu.ng
              </p>{" "}
              <br />
              <p className="ikenna-maps-address-p">
                Contact and General Enquiries:
                <br />
                Info@hensarduniversity.edu.ng
              </p>{" "}
              <br />
              <p className="ikenna-maps-address-p">
                International Office and Linkages: <br />
                Linkages@hensarduniversity.edu.ng
              </p>
            </div>
            <div className="ikenna-maps">
              <MapContact width="100%" height="500" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapAndContact;

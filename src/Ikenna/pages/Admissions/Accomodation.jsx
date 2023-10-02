import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function Accomodation() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Accomodation</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <h2 className="ikenna-acc-h">Accomodation</h2>
            <p className="ikenna-acc-p">
              Students can either use accommodation provided by the University,
              live at home, or arrange their own accommodation. In terms of
              proximity and ease of access to university resources, the campus
              accomodation is the preferrable option due to the location of the
              university.
            </p>
            <div>
              <div className="flip-ikenna-acc">
                <div>
                  <h2 className="ikenna-acc-h">
                    Campus Accommodation and Cost
                  </h2>
                  <p className="ikenna-acc-p">
                    Providing a space that serves as a home away from home is
                    our priority at Baze University. Our campus accommodation
                    options are designed with the utmost consideration for the
                    students’ welfare. Students will be housed in either
                    one-person, or two-person per rooms hostel accommodation.
                    The cost will depend on the number of students sharing, and
                    the nature of the facilities. Private accommodation (one
                    person per room) costs N715,412.50* per semester. Shared
                    accommodation (two persons per room) costs N357,706.25* per
                    semester.
                  </p>
                </div>
                <img
                  className="acc-ikenna-img"
                  src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696195520/8-bed-mixed-gender-dorm_wpnhsk.jpg"
                  alt="acc"
                />
              </div>

              <div className="flip-ikenna-acc-opp">
                <div>
                  <p className="ikenna-acc-p">
                    Each room is provided with study desks and reading lamps to
                    ensure that students have comfortable spaces for focusing on
                    their studies in their living accomodations. Refridgerators
                    and quality furniture are also provided to create the
                    perfect home-like environment for our students.
                  </p>
                </div>
                <img
                  className="acc-ikenna-img"
                  src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696195520/8-bed-mixed-gender-dorm_wpnhsk.jpg"
                  alt="acc"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accomodation;

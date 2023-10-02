import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Board() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Board</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-staff-h2">Board of Trustees</h2>

              <div className="staff-cards-container">
                {staffData.map((staff) => (
                    <div className="staff-card" key={staff.id}>
                      <img
                        className="staff-image"
                        src={staff.image}
                        alt={staff.name}
                      />
                      <div>
                        <h3>{staff.name}</h3>
                        <p className="staff-faculty">
                          Faculty: {staff.faculty}
                        </p>

                        <p className="staff-email">Email: {staff.email}</p>
                        <p className="staff-phone">Phone: {staff.phone}</p>
                        <p className="staff-dept">
                          Department: {staff.department}
                        </p>
                        {/* <div
                          style={{
                            display: "flex",
                            gap: 16,
                            fontSize: 20,
                            marginBottom: "48px",
                            backgroundColor: "#1760ec25",
                            color: "#1760ec",
                            width: "fit-content",
                            padding: '12px 16px',
                            borderRadius: 24,
                            marginTop: 16,
                            marginBottom: 24
                          }}
                        >
                          <FaXTwitter />
                          <BsFacebook />
                          <FaSquareInstagram />
                        </div> */}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Board;

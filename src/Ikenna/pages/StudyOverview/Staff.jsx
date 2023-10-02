import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import { FaSearch } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function StaffList() {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showNonAcademic, setShowNonAcademic] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStaff = staffData.filter((staff) => {
    return (
      (!showAcademic || staff.isAcademic) &&
      (!showNonAcademic || !staff.isAcademic) &&
      (staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "300px",
          alignItems: "center",
          paddingTop: "48px",
        }}
        className="ikenna-student-affairs-scrolling-div"
      >
        <h1 className="ikenna-funding-first-h1">All Staff</h1>
      </div>
      <div>
        <div className="ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-staff-h2">Staff List</h2>

              <div
                style={{
                  position: "relative",
                  marginBottom: "64px",
                  marginTop: "44px",
                  marginLeft: "12px",
                  marginRight: "12px",
                }}
                className="staff-cards-container"
              >
                <input
                  className="Ikenna-staff"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    position: "absolute",
                  }}
                />
                <FaSearch
                  style={{
                    position: "absolute",
                    left: "24px",
                    top: "0px",
                    color: "gray",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div className="staff-cards-container">
                {filteredStaff.length === 0 ? (
                  <div>
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "12px",
                      }}
                    >
                      No results found.
                    </h3>
                    <img
                      style={{
                        width: "100%",
                      }}
                      src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696153842/coming_t3bwng.png"
                      alt="not found"
                    />
                  </div>
                ) : (
                  filteredStaff.map((staff) => (
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
                )}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default StaffList;

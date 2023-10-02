import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import { FaSearch } from "react-icons/fa";

function Management() {
  return (
    <div>
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Management</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
            <div>
                <h2 className="ikenna-acc-h">
                  Prof. Kathleen Ebelechukwu Okafor
                </h2>
                <h5>Ag. Vice Chancellor</h5>{" "}
                <p className="ikenna-acc-p">
                  Prof. Kathleen E. Okafor, was born in the Eastern part of
                  Nigeria into the noble family of Dr. George Akabogu. She hails
                  from Nnewi, Anambra State. Education She had her Secondary at
                  Queens School, Enugu, she proceeded to University of Nigeria,
                  Nsukka for her LL. B degree program in 1974. Prof. Kathleen E.
                  Okafor, SAN attended the Nigerian Law School Lagos and was
                  called to the Nigerian Bar in 1979. She immediately went to
                  University College London, in 1981 to complete her LL.M
                  program. She got her PHD from the Unuversity of Lagos, in year
                  2000. Prof. Kathleen E. Okafor, SAN has major executive
                  education from the International Financial Law course by
                  Euromoney held at Oxford, Making Corporate Boards more
                  effective by Harvard Business School, International Company
                  Secretary’s Course, Regent College London, Advanced Management
                  Course, Kellogg’s Management Institute. Read More.....
                </p>
                
              </div>
        
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
    </div>
  );
}

export default Management;

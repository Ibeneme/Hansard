import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import Footer from "../../../components/Footer";

function VC() {
  return (
    <div>
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Vice Chancellor</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div className="flip-ikenna-acc">
              <img
                className="acc-ikenna-img"
                src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696195520/8-bed-mixed-gender-dorm_wpnhsk.jpg"
                alt="acc"
              />
            </div>

            <h2 className="ikenna-acc-h">Mr. David Ogbonna (Esq)</h2>
            <h4>Vice-Chancellor</h4>
            <p className="ikenna-acc-p">
              Mr. David Ogbonna (Esq) is the Deputy Vice-Chancellor,
              Administration of Baze University Abuja, Nigeria. A seasoned
              lawyer (UK qualified) with a proven knack for effectively dousing
              highly sensitive, volatile situations. Mr David is a solicitor of
              the Supreme Court, England and Wales with current practising
              certificate (14 years call). He is well-accomplished in academia;
              he had his first degree in Bachelor of Science (Sociology)
              (Calabar, Nigeria) followed by a Bachelor of Laws (LLB) (Wales,
              UK), Master of Laws (LLM) in Commercial Law (Wales, UK), Post
              Graduate Diploma in Housing Management (Wales, UK), and Post
              Graduate Diploma in Legal Practice (Wales, UK). He qualifies as a
              Solicitor and worked in the UK for more than 20 years before
              returning to Nigeria. His expertise covers Property Financing and
              Development, Housing Management, Corporate Governance, Public
              Administration, Commercial law, Public law and administration,
              Employment and Immigration Practice, Minority Rights, Education,
              and Leadership across Academia and Government service. Mr. Ogbonna
              worked with the Commission for Racial Equity, UK at a very senior
              level (Corporate Lawyer) and Equality.
            </p>
            <div>
              <div className="flip-ikenna-acc">
                <div>
                  <h2 className="ikenna-acc-h">Office of the Vice Chancellor</h2>
                  <p className="ikenna-acc-p">
                    The Office of the Deputy Vice-Chancellor (Admin) supports
                    the Vice-Chancellor to ensure effective and efficient
                    administration of the University. The Deputy Vice-Chancellor
                    (Admin) provides strategic leadership in formulation of
                    policies and implementation of the administration,
                    financial, human resources, central services, security, and
                    the maintenance of physical resource functions of the
                    University. The DVC (Admin) also supervises, directs and
                    evaluates subordinate staff to ensure that administrative
                    affairs, programmes, goals and strategic mission of the
                    University is achieved. In order to create a conducive,
                    comfortable working and living environment for teaching and
                    learning.In conjunction with other organs of the University,
                    the Deputy Vice-Chancellor (Admin) also facilitates the
                    accreditation of academic programmes of the University in
                    line with the National Universities Commission and
                    professional Regulatory bodies.
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
                  <h2 className="ikenna-acc-h">Units</h2>

                  <p className="ikenna-acc-p">
                    The units under the jurisdiction of the Deputy Vice
                    Chancellor includes: Finance and Accounts Human Resource
                    Maintenance and Assets Management Logistics and Fleet
                    Management Security and Safety Students Affairs{" "}
                  </p>
                </div>
                <img
                  className="acc-ikenna-img"
                  src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696195520/8-bed-mixed-gender-dorm_wpnhsk.jpg"
                  alt="acc"
                />
              </div>
              <div>
                <h2 className="ikenna-acc-h">Our Responsibilities:</h2>

                <p className="ikenna-acc-p">
                  In line with the vision and mission statement of the
                  University the Office of the DVC (Admin) has the following
                  specific responsibilities:
                  <ul>
                    <li>
                      Supports the Vice-Chancellor in managing the affairs of
                      the University in accordance with laid down policies and
                      procedures.
                    </li>
                    <li>
                      Coordinate the planning, organisation and administration
                      of the Finance and development functions in the
                      University.
                    </li>
                    <li>
                      Develop and maintain collaboration with governmental
                      agencies, private sector organisations, non-governmental
                      organisations, and international development organisations
                      to enhance the visibility and advance the mission of the
                      University.
                    </li>

                    <li>
                      Ensure that organisational units in the University remain
                      focused on the vision, mission and strategic goals of the
                      founder of the University.
                    </li>
                    <li>
                      Ensure sound financial management, transparency and
                      accountability in the use of the University's resources.
                      Implement the strategic plan of the University as approved
                      by the Board of Trustees (BoT).
                    </li>
                    <li>
                      Advise the University management on prompt observance of
                      all statutory and legal requirements of regulatory
                      agencies and other professional bodies towards the
                      achievement of the vision and mission of the University.
                    </li>
                    <li>
                      Assist by providing leadership in the development and
                      implementation of Business strategy and strategic
                      direction of the University.
                    </li>
                  </ul>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VC;

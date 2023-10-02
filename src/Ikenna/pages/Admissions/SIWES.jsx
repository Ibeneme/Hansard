import React from "react";
import "../../styling/Admission.css";
import TuitionTable from "./SIWEStable";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function SIWES() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">SIWES</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <h2 className="ikenna-acc-h">SIWES</h2>
            <p className="ikenna-acc-p">
              The Student Industrial Work Experience Scheme (SIWES) is a crucial
              component of higher education in Nigeria, aimed at bridging the
              gap between theoretical knowledge gained in the classroom and
              practical skills required in the workplace. SIWES serves as a
              platform for students to gain hands-on experience in their chosen
              fields, fostering personal and professional development.
            </p>
            <div>
              <div className="flip-ikenna-acc">
                <p className="ikenna-acc-p">
                  The following are objectives of the Hensard University SIWES:
                </p>
              </div>

              <div>
                <h3>Skill Development</h3>
                <p className="ikenna-acc-p">
                  Provide students with an opportunity to apply classroom
                  knowledge to real-world situations, helping them acquire
                  practical skills and competencies essential for their future
                  careers.
                </p>
              </div>
              <div>
                <h3>Industry Exposure</h3>
                <p className="ikenna-acc-p">
                  Expose students to the actual workings of industries,
                  businesses, and organizations related to their fields of
                  study, gaining insights into industry practices, trends, and
                  challenges.
                </p>
              </div>
              <div>
                <h3>Networking</h3>
                <p className="ikenna-acc-p">
                  Give students the chance to build a professional network by
                  interacting with industry professionals, mentors, and peers,
                  which can be valuable for future job opportunities.
                </p>
              </div>
              <div>
                <h3>How we do our SIWES</h3>
                <div>
                  <h5>Placement</h5>
                  <p className="ikenna-acc-p">
                    Students are typically placed in organizations related to
                    their fields of study, including government agencies,
                    private companies, research institutions, and non-profit
                    organizations.
                  </p>
                </div>
                <div>
                  <h5>Duration</h5>
                  <p className="ikenna-acc-p">
                    SIWES programs vary in duration but typically last between
                    three and six months. Longer durations provide students with
                    more in-depth experiences.
                  </p>
                  <TuitionTable />
                </div>
                <br />
                <br />
                <h5>Supervision:</h5>
                <p className="ikenna-acc-p">
                  Students are assigned supervisors or mentors within the host
                  organization to guide and evaluate their progress during the
                  program. Faculty staff members are also allocated to visit
                  students at intervals, for supervision while on training to
                  monitor student’s progress.
                </p>
                <div>
                  <h5>Reporting:</h5>
                  <p className="ikenna-acc-p">
                    Students are required to maintain regular reports, detailing
                    their activities, achievements, and challenges faced during
                    the SIWES period in a logbook
                  </p>
                </div>
                <div>
                  <h5>Assessment:</h5>
                  <p className="ikenna-acc-p">
                    The performance of students is usually assessed through
                    evaluations conducted by both their supervisors and academic
                    institutions. These assessments contribute to their overall
                    academic grades.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SIWES;

import React, { useState } from "react";
import "../../styling/Admission.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Hr() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Human Resources Office</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-acc-h">About The Human Resources Office</h2>
              <p className="ikenna-acc-p">
                The Human Resources Team thrives on diversity and proactive
                partnerships to recruit, develop and retain a highly skilled and
                engaged workforce. We endeavour to inspire and develop the
                University’s workforce in their efforts to fulfil their personal
                and professional goals. The HR team is committed to delivering
                the University’s mission, striving to provide a rewarding,
                supportive and dynamic work experience for employees. We are
                also unswerving in developing and maintaining a diverse
                workforce. Baze University’s diversity maximizes our collective
                talents and fosters a broader spectrum of thinking that allows
                for better innovation and decision- making. The Human Resources
                Team is also committed to preserving the confidentiality and
                privacy of information entrusted to its care. We oversee all
                facets of Employment Policies and Conditions of Service,
                Recruitment, Faculty Services, Compensation and Benefits,
                Employee Training and Development, Educational Opportunities,
                Employer-Employee Relations, Pension, Staff Awards and
                Recognition, Onboarding of new Employees, Health and Welfare
                Benefits, Employment Verification and maintaining Baze
                University culture and a Safe work environment.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Mission</h2>
              <p className="ikenna-acc-p">
                We thrive on diversity and aim to enhance the University’s
                mission by fostering a healthy, impartial, unbiased work
                environment that guarantees our staff an approachable,
                confidential and service-oriented environment that enables our
                current staff to develop to their full potential.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Values</h2>
              <p className="ikenna-acc-p">
                Respect for others always. Striving for continuous improvement.
                Efficiency in everything that we do, through the way we work.
                Consistently add value with every service we provide. Excellence
                in our partnership with one another and the University
                community.{" "}
              </p>
            </div>
            <div className="flip-ikenna-acc">
              <div>
                <h2 className="ikenna-acc-h">
                  Mahmoud, Ahmad L. fcna, fcai, fipmd{" "}
                </h2>
                <h5>Deputy Registrar, Human Resources</h5>
                <p className="ikenna-acc-p">
                  Preceding his appointment as the Deputy Registrar, Human
                  Resources, Mr Mahmoud, Ahmad L. served as a Deputy Director,
                  Administration and Finance at the FCT Muslim Pilgrims Welfare
                  Board, Abuja and as a Deputy Director, Accounts with the State
                  Ministry of Health, Kano State. His accomplishments include
                  redesigning the HR structure to improve efficiency in staff
                  recruitment, retention and staff development. Mr Mahmoud,
                  Ahmad L. holds a Master's in Treasury Management, a PGD in
                  Accounting and Finance, 2006 from Bayero University, Kano; a
                  Diploma in Public Accounting and Auditing from Kaduna
                  Polytechnic. He is a member of some professional bodies. Mr
                  Mahmoud is responsible for the general affairs of Human
                  Resources and provides advice and support throughout the
                  University and also oversees the Human Resources team and
                  communications for staff and faculty. Mr Mahmoud Ahmad L. is
                  an articulate, enthusiastic, highly motivated, and
                  detail-oriented person with a long history of over 35 years of
                  service. Mr Mahmoud Ahmad L. joined Baze University in March
                  2014.
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
      <Footer />
    </div>
  );
}

export default Hr;

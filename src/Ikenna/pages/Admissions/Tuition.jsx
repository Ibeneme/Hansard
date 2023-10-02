import React from "react";
import "../../styling/Admission.css";
import TuitionData from "../../Data/Tuition";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function Tuition() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Tuition</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <h2 className="ikenna-acc-h">Tuition Fees</h2>
            <p className="ikenna-acc-p">
              Baze delivers quality through experienced international staff,
              superb teaching equipment, overseas external examiners, and
              first-rate buildings to guarantee standards. Baze aims to provide
              university education to British standards in Nigeria at about half
              the cost of sending a student to study abroad
            </p>
            <div>
              <table className="ikenna-table">
                <thead>
                  <tr>
                    <th className="ikenna-th">Semester</th>
                    <th className="ikenna-th">Department</th>
                    <th className="ikenna-th">Amount (Naira)</th>
                  </tr>
                </thead>
                <tbody>
                  {TuitionData.map((item, index) => (
                    <tr key={index} className="ikenna-tr">
                      <td className="ikenna-td">{item.semester}</td>
                      <td className="ikenna-td">{item.department}</td>
                      <td className="ikenna-td">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tuition;

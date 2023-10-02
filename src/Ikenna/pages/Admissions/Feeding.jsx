import React, { useState } from "react";
import { staffData } from "../../Data/StaffData";
import "../../styling/Admission.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function Feeding() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Feeding</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <h2 className="ikenna-acc-h">Feeding</h2>
            <p className="ikenna-acc-p">
              The meals arrangement is solely-based on the students’ preference.
              The school however has made a provision for students and parents
              that want to regulate the feeding cost in an effective manner.
              Students can pay a certain amount (there are no limitations) and
              be given a feeding booklet. Using the slips in this booklet, they
              can buy food from the eating areas that use this method as a form
              of payment. This reduces the need to carry around cash whilst
              ensuring that students are properly fed and satisfied. Currently,
              the only cafeterias that use this form of transaction is Brim and
              Terminal 2.
            </p>
            <div>
              <div className="flip-ikenna-acc">
                <div>
                  <h2 className="ikenna-acc-h">The Brim</h2>
                  <p className="ikenna-acc-p">
                    The Brim was the university’s first open cafeteria. Since
                    its inception, the Brim has been dedicated to serving the
                    most delightful array of dishes to ensure that their
                    customers have an enjoyable moment at the university.
                    Ranging from rice dishes to traditional swallows, the Brim
                    has proven to be a connoisseur of well-made food. It also
                    includes an outdoor arena where students can relax and enjoy
                    their meals as well as a shawarma shack.
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
                  <h2 className="ikenna-acc-h">Grilled food</h2>

                  <p className="ikenna-acc-p">
                    Grilled food is always a delight to partake in and WSauce
                    provides just the right amount of beautifully grilled meals
                    that will leave you pandering for extra helpings. Their
                    exhaustive menu of grilled meats, Shawarma, and even noodles
                    are popular amongst the students of the university.{" "}
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

export default Feeding;

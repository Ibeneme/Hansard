import React, { useState } from "react";
import "../../styling/Admission.css";
import { CoreValuesData } from "../../Data/CoreValues";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function AboutUni() {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">About Us</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-acc-h">About Us</h2>
              <p className="ikenna-acc-p">
                Baze University is a distinctive quality-based educational
                institution making a difference in the Nation’s history through
                the positive impact of its service and graduates output.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Mission</h2>
              <p className="ikenna-acc-p">
                To establish and maintain a more suitable academic environment,
                synergizing world-class human capital and best technology for
                creating and impacting knowledge to develop and modernize the
                Nigerian society
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Vision</h2>
              <p className="ikenna-acc-p">
                To be a distinctive quality-based educational institution,
                making difference in the nation's history through the positive
                impact of its services and its graduate output.
              </p>
            </div>
            <h2 className="ikenna-acc-h">Our Core Values</h2>
            <p className="ikenna-acc-p">
              Hensard University expects adherence of her core values from
              students, staff and faculty members in her commitment to raise
              generations of scholars as successful servant leaders at
              individual, family, national and global levels. Beyond academic
              certificates and degrees, Hensard University aspires to reform the
              totality of the human being by imbuing her students, staffs, and
              faculties to lead an ethical life of service to God and humanity
              at all times.{" "}
            </p>
            {CoreValuesData.map((item, index) => (
              <div key={index} className="item-container">
                <h3
                  onClick={() => handleItemClick(index)}
                  className={`item-title ${
                    expandedItem === index ? "expanded-title" : ""
                  }`}
                >
                  {item.title}
                </h3>
                {expandedItem === index && (
                  <div>
                    <p className="ikenna-maps-address-p ikenna-expanded">
                      {item.description1}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUni;

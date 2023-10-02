import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { dummyData } from "../../Data/StudentAffairs";
import Navbar from "../../../components/Navbar";
const StudentAffairs = () => {
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
        <h1 className="ikenna-funding-first-h1">Student Affairs</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <div>
            <h3>What we do at Student Affairs Office</h3>
            <p className="ikenna-maps-address-p">
              Towards the accomplishment of our Vision and Mission enunciated
              above, we strategize to ensure the enhancement of the overall
              quality of student life in and out of campus through the
              implementation of the broad objectives of Hensard University as it
              relates to the Students’ Affairs Department. Our major activities
              include the followings:
            </p>
          </div>
          <div
            style={{
              marginTop: 48,
            }}
          >
            {dummyData.map((item, index) => (
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
                  <p className="ikenna-maps-address-p ikenna-expanded">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentAffairs;

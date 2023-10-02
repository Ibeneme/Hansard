import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Sample";
import { FacultiesData } from "../../Data/Faculties";
import { BiRightArrowAlt } from "react-icons/bi";
import ComponentDepts from "./UnderGraduatesStudy";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const DepartmentList = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/department/${id}`);
  };

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
        <h1 className="ikenna-funding-first-h1">Undergraduates</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <h2>Our Faculties</h2>
          <p className="ikenna-maps-address-p">
            Proposed Undergraduate Programs under HENSARD UNIVERSITY, Toru-Orua.
            (2023)
          </p>
          <div
            style={{
              marginTop: 48,
            }}
          >
            {FacultiesData.map((item, index) => (
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

                    {item.description2 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description2}
                      </p>
                    ) : null}
                    {item.description3 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description3}
                      </p>
                    ) : null}
                    {item.description4 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description4}
                      </p>
                    ) : null}
                    {item.description5 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description5}
                      </p>
                    ) : null}
                    {item.description6 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description6}
                      </p>
                    ) : null}
                    {item.description7 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description7}
                      </p>
                    ) : null}
                    {item.description8 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description8}
                      </p>
                    ) : null}
                    {item.description9 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description9}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2
            style={{
              marginTop: 100,
            }}
          >
            Our Departments
          </h2>
          <p className="ikenna-maps-address-p">
            Proposed Undergraduate Programs under HENSARD UNIVERSITY, Toru-Orua.
            (2023)
          </p>
          <ComponentDepts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentList;

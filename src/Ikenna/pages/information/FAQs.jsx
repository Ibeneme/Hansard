import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { FaqsData } from "../../Data/Faqs";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import Navbar from "../../../components/Navbar";

const FAQs = () => {
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
        <h1 className="ikenna-funding-first-h1">Frequently Asked Questions</h1>
      </div>
      <div className="ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <div
            style={{
              marginTop: 24,
            }}
          >
            <h3>Frequently Asked Questions</h3>
            <br />
            {FaqsData.map((item, index) => (
              <div key={index} className="item-container">
                <div
                  onClick={() => handleItemClick(index)}
                  className={`item-title ${
                    expandedItem === index ? "expanded-title" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 4,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
               
                    }}
                  >
                    {expandedItem === index ? (
                      <MdAddCircle />
                    ) : (
                      <MdRemoveCircle />
                    )}
                  </span>
                  <h3
                    onClick={() => handleItemClick(index)}
                    className={`item-title ${
                      expandedItem === index ? "expanded-title" : ""
                    }`}
                  >
                    {item.title}
                  </h3>{" "}
                </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;

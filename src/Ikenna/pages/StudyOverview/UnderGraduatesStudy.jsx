import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Sample";
import { BiRightArrowAlt } from "react-icons/bi";

const ComponentDepts = () => {
  return (
    <div>
      <div
        style={{
          marginTop: 48,
        }}
      >
        {Data.map((item, index) => (
          <div key={index} className="ikenna-item-container">
            <h3
              style={{
                fontSize: "16px",
              }}
            >
              {item.title}
            </h3>
            {/* <h1
                  style={{
                    fontSize: "32px",
                  }}
                >
                  {item.students}
                </h1> */}
            <div
              style={{
                marginTop: "48px",
                marginBottom: 16,
              }}
            >
              <span className="ikenna-funding-span-opposite">
                Apply Now <BiRightArrowAlt />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentDepts;

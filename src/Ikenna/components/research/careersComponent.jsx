import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const CareersComponent = ({ title, buttonText, description, onClick }) => {
  return (
    <div
      data-aos="zoom-in"
      style={{
        width: "100%",
        backgroundColor: "#ffffff12",
        color: "white",
        padding: 24,
        borderRadius: 12,
        justifyContent: "space-between",
        minHeight: 300,
      }}
    >
      <div>
        <h2 data-aos="zoom-in">{title}</h2>
        <p
          data-aos="zoom-in"
          style={{
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>

      <div
      data-aos="zoom-in"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff45",
          width: "fit-content",
          padding: "12px 24px",
          marginTop: 24,
          borderRadius: 243,
          gap: 48,
        }}
        onClick={onClick}
      >
        <p>{buttonText}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1760ec",
            width: "fit-content",
            padding: 8,
            borderRadius: 24,
            cursor: "pointer",
          }}
        >
          <BiRightArrowAlt />
        </div>
      </div>
    </div>
  );
};

export default CareersComponent;

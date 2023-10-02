import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const CareersComponent = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: "#ffffff12",
        color: "white",
        padding: 24,
        borderRadius: 12,
        minHeight: 300,
      }}
    >
      <h2>Developer</h2>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a.
      </p>

      <div style={{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#ffffff45',
        width: 'fit-content',
        padding: '12px 24px',
        marginTop: 24,
        borderRadius: 243,
        gap: 64
      }}>
        <p>Apply Now</p>
        <div style={{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#d92828',
        width: 'fit-content',
        padding: 12,
        borderRadius: 24
      }}>
          <BiRightArrowAlt />
        </div>
      </div>
    </div>
  );
};
export default CareersComponent;

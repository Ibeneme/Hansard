import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const NotFound = () => {
  const navigation = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          width: "100vw",
          flexDirection: "column",
        }}
      >
        <img
          className="img-404"
          src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696051404/Group_427319790_g1zmcy.png"
          alt="404"
        />
        <button
          style={{
            height: 50,
            width: "fit-content",
            padding: "12px 24px",
            backgroundColor: "#1760EC",
            color: "white",
            marginTop: -45,
            borderRadius: 8,
            border: "none",

          }}
          className="btn-404"
          onClick={() => navigation("/")}
        >
          Back to home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

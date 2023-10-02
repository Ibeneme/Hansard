import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const ComingSoon = () => {
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
          padding: 16
        }}
      >
        <h1>Coming Soon!!</h1>
        <p
          style={{
            color: "gray",
            fontSize: 14,
            textAlign: 'center',
          }}
        >
          {" "}
          This Page is coming soon, We suggest you go back to the home Menu.
        </p>
        <img
          className="img-404"
          src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696153842/coming_t3bwng.png"
          alt="404"
        />
        <button
          style={{
            height: 50,
            width: "fit-content",
            padding: "12px 24px",
            backgroundColor: "#1760EC",
            color: "white",
            marginTop: 48,
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

export default ComingSoon;

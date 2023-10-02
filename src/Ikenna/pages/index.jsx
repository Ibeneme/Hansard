import React from "react";
import CareersComponent from "../components/research/careersComponent";
import { useNavigate } from "react-router-dom";

const Indexa = () => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#04122f",
      }}
      className="careers-div"
    >
      <CareersComponent
        title="Undergraduate Degree"
        description="Our dedicated faculty, state-of-the-art facilities, and rigorous academic programs create a dynamic learning environment that prepares students for success in their chosen careers. Through a combination of theoretical knowledge and practical skills development, we foster critical thinking, interdisciplinary collaboration, and a passion for lifelong learning. With opportunities for experiential learning, comprehensive support services, and a vibrant campus community, we are committed to empowering you to achieve your goals and unlock your full potential as a future leader and innovator."
        buttonText="Apply Now"
        onClick={() => navigation("/department")}
      />
      <CareersComponent
        title="Foundation school"
        description="The Foundation School at Hensard University is dedicated to providing a strong academic foundation for students embarking on their higher education journey. With a focus on comprehensive preparatory courses and personalized support, we empower students to develop the necessary skills, knowledge, and confidence to thrive in their future degree programs. Our experienced faculty and tailored curriculum create an engaging learning environment that fosters critical thinking, effective study habits, and a strong academic mindset."
        buttonText="Apply Now"
        onClick={() => navigation("/department")}
      />
      <CareersComponent
        title="Hensard Centres"
        description="Hensard University's Centres and Institutes are dedicated to advancing knowledge and driving innovation in various fields. With cutting-edge research, interdisciplinary collaboration, and a commitment to excellence, our Centres and Institutes are at the forefront of groundbreaking discoveries and transformative solutions. Through their expertise, state-of-the-art facilities, and collaborative partnerships, they provide a dynamic environment for researchers, scholars, and students to explore new frontiers, tackle complex challenges, and make a lasting impact on society."
        buttonText="Apply Now"
        onClick={() => navigation("/about")}
      />
    </div>
  );
};

export default Indexa;

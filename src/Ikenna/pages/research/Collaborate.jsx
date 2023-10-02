import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const Collaborate = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Collaborate with Us</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <h3 className="ikenna-maps-address-h3"> Collaborate with us</h3>
          <p className="ikenna-maps-address-p">
            We extend a warm invitation to researchers from diverse backgrounds
            and disciplines to join our vibrant research community at the IT,
            Research, and Innovation Department. Whether your passion lies in
            artificial intelligence, medicine, arts, anatomy, cybersecurity,
            data science, biology, or any other field, you'll discover an
            inclusive and intellectually stimulating environment to pursue your
            research endeavors. Join our community of researchers, where your
            ideas can flourish, your discoveries have the potential to shape the
            future, and your innovative solutions can create a meaningful
            impact. Together, let's unlock new horizons of knowledge and
            contribute to transforming the world through groundbreaking research
            and innovation. We eagerly anticipate your arrival at the IT,
            Research, and Innovation Office at Baze University. Let's embark on
            an extraordinary journey of exploration, collaboration, and positive
            change!
          </p>
          <br />    <br />
          <div>
            <p className="ikenna-maps-address-p">
              Admissions:
              <br />
              Admissions@hensarduniversity.edu.ng
            </p>{" "}
            <br />
            <p className="ikenna-maps-address-p">
              Staff Recruitment:
              <br /> Recruitment@hensarduniversity.edu.ng
            </p>{" "}
            <br />
            <p className="ikenna-maps-address-p">
              Contact and General Enquiries:
              <br />
              Info@hensarduniversity.edu.ng
            </p>{" "}
            <br />
            <p className="ikenna-maps-address-p">
              International Office and Linkages: <br />
              Linkages@hensarduniversity.edu.ng
            </p>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Collaborate;

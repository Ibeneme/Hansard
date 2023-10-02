import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { CounsellingData } from "../../Data/CounsellingCentre";
import Navbar from "../../../components/Navbar";

const Counselling = () => {
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
        <h1 className="ikenna-funding-first-h1">Counselling Centre</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <h2>Objectives of Our Counselling Centre</h2>
          <p className="ikenna-maps-address-p">
            The Hensard University Center's mission is to develop and provide
            services aimed at assisting students, faculty, and staff in
            acquiring the skills, attitudes, and resources necessary for
            pursuing productive and fulfilling lives while thriving on the
            Hensard University campus. The primary objective of the Center is to
            support Hensard University's educational mission by facilitating
            academic and career development, enhancing the social and emotional
            well-being of students, faculty, and staff. Additionally, the Center
            plays a crucial role in training new clinical professionals,
            offering consultation services to the campus community, and engaging
            in ongoing research activities focused on program evaluation and
            assessing student needs. We consider it an integral part of our
            mission to design and deliver programs and services that recognize,
            respect, and value the diverse backgrounds, characteristics, and
            abilities of our students, faculty, and staff. The Center's
            practices are rooted in spiritual and humanistic values, emphasizing
            self-reflection, lifelong learning, and the holistic development of
            individuals. Our services empower students, faculty, and staff to
            actively participate in and contribute to both the academic and
            community life at Hensard University. At Hensard University, our
            Center promotes psychological well-being among students and the
            campus community through preventative programs, clinical
            interventions, and professional consultations. Our services are
            customized to meet the unique needs of individuals, encompassing
            assessment, consultation, brief psychotherapy, and referrals.
            Through collaboration with other campus support services, the Center
            actively contributes to student success, academic excellence, and
            the creation of a vibrant and engaged campus life at Hensard
            University.{" "}
          </p>
          <div style={{ marginTop: 48 }}>
            {CounsellingData.map((item, index) => (
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

export default Counselling;

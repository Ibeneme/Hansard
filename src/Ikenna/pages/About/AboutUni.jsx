import React, { useState } from "react";
import "../../styling/Admission.css";
import { CoreValuesData } from "../../Data/CoreValues";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function AboutUni() {
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
        <h1 className="ikenna-funding-first-h1">About Us</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-acc-h">About Us</h2>
              <p className="ikenna-acc-p">
                Hensard University is a unique private university licensed by
                the Federal Government of Nigeria in 2023 and promoted by the
                Henry Seriake Dickson Foundation (HSDF). His Excellency Senator
                Henry Seriake Dickson is the Chairman of the University’s Board
                of Trustees. Located in Toru-Orua, in Sagbama Local Government
                Area of Bayelsa State, it is the first private university in the
                State. Established to pursue academic, research and
                entrepreneurial excellence, character formation, discipline, and
                commitment to service in line with the founder’s vision, Hensard
                University will bridge the gaps between academic certifications,
                skills development, and the practical industrial application of
                knowledge for the development of society. In keeping with the
                University’s vision of producing leaders, entrepreneurs, and
                champions of economic and social change, Hensard students will
                be taught entrepreneurship and encouraged to become real
                entrepreneurs beginning in their second year of school through
                by exposure to practical involvement in the running, overseeing,
                and management of businesses in their chosen fields under the
                guidance and mentorship of the school. The goal of combining
                academic excellence and participation in business management is
                for every Hensard student to graduate with the academic,
                personal training, discipline, and practical skills needed to
                meet the Hensard expectation that its graduates will not only be
                ready for the labor market but will also create jobs and be
                employers of labor. Hensard alumni will continue to receive
                mentorship and support in creating their own enterprises after
                graduation through the Hensard Business Support Programme.
                Hensard University places a high value on the development of the
                whole person through character formation, leadership
                development, and instilling in students a solid spiritual basis
                for growth based on each student's faith, belief, and
                conviction. The distinctiveness of Hensard University is further
                emphasized by its broad vision of human development. While it
                strives towards the highest academic, research, entrepreneurial
                and innovation standards, it also emphasizes character,
                morality, and spirituality, without which academic qualification
                or life, according to Hensard standard, is incomplete. Hensard
                University’s motto Que servit homo servit Deo is instructive in
                this regard. Que servit homo servit Deo, Service to man is
                service to God, is the philosophy that encompasses these core
                values.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Mission</h2>
              <p className="ikenna-acc-p">
                • Impact society in a transformational way – locally,
                nationally, and worldwide. <br />• Transform students through
                innovative teaching and entrepreneurial involvements that
                promote lifelong learning.
                <br /> • Encourage research and development for the progress of
                society and inclusive sustainable development. <br />•
                Collaboration with prestigious national and international
                institutions to share ground-breaking research, teaching and
                learning experiences. <br />• Offer state of the art
                infrastructural facilities for blended, project and
                problem-based learning.
                <br /> • Accomplish leadership in each discipline, reinforce
                interdisciplinary and industry driven education, and that
                transform theory into practice.
                <br /> • Acts as a global, open marketplace of ideas where
                pupils are free to challenge any notions, presumptions, customs,
                cultures, traditions, or biases to advance their pursuit of new
                knowledge and the advancement of society.
                <br /> • Increase cultural knowledge by providing opportunity to
                study languages, cultures, the arts, and the ramifications of
                social, political, economic, and technological development.{" "}
                <br />• Produce ethical students and leaders with sound
                personality, character, enduring emotions, and sound intellect
                for better service. With our unique international, industry,
                advisory boards, and linkages, we facilitate effective
                mentorship to place students with current knowledge in order for
                them to become global citizens.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Our Vision</h2>
              <p className="ikenna-acc-p">
                Aspire to be a top-tier academic, research, and entrepreneurial
                university, producing ethical and responsible students and
                professionals who are committed to sustainable development.
              </p>
            </div>
            <h2 className="ikenna-acc-h">Our Core Values</h2>
            <p className="ikenna-acc-p">
              Hensard University expects adherence of her core values from
              students, staff and faculty members in her commitment to raise
              generations of scholars as successful servant leaders at
              individual, family, national and global levels. Beyond academic
              certificates and degrees, Hensard University aspires to reform the
              totality of the human being by imbuing her students, staffs, and
              faculties to lead an ethical life of service to God and humanity
              at all times.{" "}
            </p>
            {CoreValuesData.map((item, index) => (
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
}

export default AboutUni;

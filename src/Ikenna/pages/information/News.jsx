import React from "react";
import Footer from "../../../components/Footer";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import Navbar from "../../../components/Navbar";

const IkennaNews = () => {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">News</h1>
      </div>
      <div className="ikenna-maps-address">
        <div
         className="ikenna-news-divider"
        >
          <div className="ikenna-maps-address-first-div-top">
            <div>
              <h2 className="Ikenna-news-h2">
                HENSARD UNIVERSITY WILL PROMOTE ACADEMIC EXCELLENCE IN NIGERIA –
                DICKSON
              </h2>
              <div>
                <p className="Ikenna-news-date">June 9, 2023</p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696146794/image21_sl4kgm.jpg"
                  alt="Governor"
                  className="ikenna-news-img"
                />
                <div
                  style={{
                    display: "flex",
                    gap: 24,
                    fontSize: 24,
                    marginBottom: "48px",
                  }}
                >
                  <FaXTwitter />
                  <BsFacebook />
                  <FaSquareInstagram />
                </div>
              </div>
              <p className="Ikenna-news-p">
                <span className="Ikenna-news-p-span"> THE </span>Senator
                representing Bayelsa West, Senator Henry Seriake Dickson,
                assured that the HENSARD University, Toru Orua would be
                committed to the promotion of academic excellence in Nigeria.
                Dickson who represents Bayelsa West in the Senate spoke shortly
                after receiving the certificate of registration for the new
                university on behalf of the Henry Seriake Dickson Foundation
                from the National Universities Commission in Abuja on Friday. He
                said that as a Governor who dedicated so much effort to the
                promotion of education at all levels, the new university will
                offer him further opportunities to continue with his
                contributions to educational development. He stressed that no
                investment should be too much for the development of education
                which according to him is most important to societal
                development. He thanked the leadership of the NUC for their
                dedication to the promotion of education in Nigeria. He said
                “Today, I was at the National Universities Commission where I
                joined 36 order Proprietors and promoters who were officially
                and formally presented with the certificate of registration of
                various universities in Nigeria. “On behalf of the Henry Seriake
                Dickson Foundation, promoters of the HENSARD University, I thank
                and appreciate Professor A. A Rasheed MNI, and members of the
                NUC team for the meticulous job, and their dedication to the
                cause of promoting and deepening education in Nigeria.{" "}
              </p>
              <img
                src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696146794/image21_sl4kgm.jpg"
                alt="Governor"
                className="ikenna-news-img"
              />
              <p className="Ikenna-news-p">
                “The HENSARD University is poised to promote very high standards
                comparable with a lot of things, anywhere else. It will start
                activities this year as everyone knows. “As Governor, I have
                dedicated a lot of time and effort to the promotion and
                deepening of frontiers of education, and human capacity
                building. I built universities, Polytechnics, Colleges of
                Education, secondary schools, and boarding schools for the first
                time in my state, created institutions: Education Development
                Trust Fund, and the Students Tertiary Education Loans Board, and
                promulgated several laws to protect and deepen education, and
                awarded several scholarships within the country and across the
                world. I did all of these in a period of unprecedented national
                recession. “I did it because as I always say, no investment
                makes meaning as investment in education. Every other investment
                deteriorates with time but investment in human capacity Building
                brings on the contrary, multiplier intergenerational effects.
                “Having built these in my governorship years, I believe that
                HENSARD University will allow me to continue to support and
                promote, education and development of skills. The HENSARD
                University is going to be a combination of academic training and
                practical professional exposure and work closely with the
                corporate world to ensure that skills are developed and our
                graduates instead of seeking jobs, will themselves be the
                employers of labor. HENSARD University will pave the way even in
                that. “I congratulate all members of the HENSARD team and once
                again my appreciation to the NUC and the Federal Government
                granting this license and all those prospective students should
                follow up statements that the management will issue from time to
                time.”
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              marginTop: -24,
            }}
          >
            <div className="ikenna-maps-address-first-div-new">
              <div>
                <h3 className="hensard-ikenna-news-h3">
                  Hensard University Lauches
                </h3>
                <p className="Ikenna-news-p-top">
                  Time posted: 30th September 2023
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IkennaNews;

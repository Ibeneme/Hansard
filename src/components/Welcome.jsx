/* eslint-disable react/no-unescaped-entities */
import ButtonStyleI from "./buttons/StyleI";

const Welcome = () => {
  return (
    <>
      <section
        data-aos="zoom-in"
        className="xui-container xui-py-3 xui-lg-py-5 xui-pos-relative"
      >
        <img
          src="https://res.cloudinary.com/dqa2jr535/image/upload/t_Hensard/v1696146794/image21_sl4kgm.jpg"
          alt="custom image"
          className="xui-w-fluid-100 xui-lg-h-300 hensard-placed-image-ii"
        />
        <div className="xui-row xui-pos-relative" style={{ zIndex: 2 }}>
          <div
            data-aos="zoom-in"
            className="xui-col-12 xui-lg-col-7 xui-px-2 xui-py-3 xui-text-white"
            style={{
              backgroundColor: "var(--navy-blue)",
              borderRight: "20px solid var(--red)",
            }}
          >
            <h1
              data-aos="zoom-in"
              className="xui-font-sz-120 xui-lg-font-sz-150 xui-text-uppercase"
            >
              Founder's Message
            </h1>
            <p
              data-aos="zoom-in"
              className="xui-mt-1 xui-line-height-2 xui-opacity-8"
            >
              On behalf of my family and the Henry Seriake Dickson Foundation, I
              extend warm welcomes to you. Your interest in the establishment of
              Hensard University by the Foundation is greatly
              appreciated.Hensard University provides its students with a unique
              combination of academics, practical skills, industrial exposure,
              and mentorship. Hensard aims to equip her students with real-world
              experiences and entrepreneurial skills. We are poised to
              transforming graduates as entrepreneurs and wealth creators with
              industry-oriented skills. Dual certifications, international
              collaborations and partnerships will ensure standards, and
              exposure of our students to renowned mentors and leaders in
              various fields, globally.
            </p>
            <div data-aos="zoom-in" className="xui-mt-2">
              <ButtonStyleI path={"/"} text={"Read More"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;

import ButtonStyleI from "./buttons/StyleI";
import CustomImage from "../assets/images/redcharlie-redcharlie1-vGbC6mOeUCw-unsplash.png";

const Stats = () => {
  return (
    <>
      <section className="xui-container xui-py-3 xui-lg-py-5 xui-pos-relative">
        <img
          src={CustomImage}
          alt="custom image"
          className="xui-w-fluid-100 xui-lg-h-300 hensard-placed-image-i"
        />
        <div className="xui-row xui-pos-relative" style={{ zIndex: 2 }}>
          <div
            className="xui-col-12 xui-lg-col-7 xui-px-2 xui-py-3 xui-text-white"
            style={{ backgroundColor: "var(--red)" }}
          >
            <h1 className="xui-font-sz-120 xui-lg-font-sz-150 xui-text-uppercase">
              WELCOME TO HENSARD UNIVERSITY.
            </h1>
            <p className="xui-mt-1 xui-line-height-2 xui-opacity-8">
              Hensard University is a unique private university licensed by the
              Federal Government of Nigeria in 2023 and promoted by the Henry
              Seriake Dickson Foundation (HSDF). Located in Toru-Orua, in
              Sagbama Local Government Area of Bayelsa State, it is the first
              private university in the State, established to pursue academic,
              research and entrepreneurial excellence, character formation,
              discipline, and commitment to service in line with the founder’s
              vision, Hensard University will bridge the gaps between academic
              certifications, skills development, and the practical industrial
              application of knowledge for the development of society. The goal
              of combining academic excellence and participation in business
              management is for every Hensard student to graduate with the
              academic, personal training, discipline, and practical skills
              needed to meet the Hensard expectation that its graduates will not
              only be ready for the labor market but will also create jobs and
              be employers of labor.
            </p>
            <br />
            <br />
            <h1 className="xui-font-sz-120 xui-lg-font-sz-150 xui-text-uppercase">
              OUR VISION
            </h1>
            <p className="xui-mt-1 xui-line-height-2 xui-opacity-8">
              Aspire to be a top-tier academic, research, and entrepreneurial
              university, producing ethical and responsible students and
              professionals who are committed to sustainable development
            </p>

            <div className="xui-mt-2">
              <ButtonStyleI path={"/"} text={"Apply Now"} color="var(--red)" />
            </div>
          </div>
          <div className="xui-col-12 xui-lg-col-5 xui-lg-pt-5">
            <div className="xui-box-shadow xui-h-fluid-100 xui-bg-white">
              <div
                className="xui-d-grid xui-lg-grid-col-2"
                style={{ color: "var(--navy-blue)" }}
              >
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    24
                  </h2>
                  <p>Departments</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    2
                  </h2>
                  <p> Degrees, Dual Certificate on Graduation</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    100%
                  </h2>
                  <p> Mentorship From Industry Leaders</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    100%
                  </h2>
                  <p>International Standards </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

import HeaderPic from "../../assets/images/giuseppe-patriarchi-uDqa5Em2Smo-unsplash.png";
import ButtonStyleI from "../buttons/StyleI";

const HomeHeader = () => {
  return (
    <>
      <section
        className="xui-bg-pos-center xui-bg-sz-cover"
        style={{ backgroundImage: `url(${HeaderPic})` }}
      >
        <div className="xui-container xui-py-4 xui-lg-py-10 xui-overlay">
          <h1 className="xui-text-uppercase xui-font-sz-150 xui-lg-font-sz-300">
            Hensard University
          </h1>
          <p>Toru-Orua, in Sagbama Local Government Area of Bayelsa State</p>
          <div className="xui-mt-4">
            <ButtonStyleI path="/" text="Apply Now" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;

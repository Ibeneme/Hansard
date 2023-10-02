import ButtonStyleI from "./buttons/StyleI";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Programs = () => {
  return (
    <>
      <section className="xui-container xui-py-3 xui-lg-py-5 hensard-bg-navy-blue xui-text-white">
        <h1 className="xui-font-sz-150 xui-lg-font-sz-200 xui-text-uppercase xui-text-center">
          Our programs
        </h1>
        <div className="xui-mt-3">
          <swiper-container slides-per-view={3.2} space-between={20}>
            <swiper-slide>
              <div className="xui-py-2 xui-px-1 hensard-programs-box">
                <h2 className="xui-font-sz-125 xui-lg-font-sz-120">
                  BACHELOR’S DEGREE
                </h2>
                <p className="xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1">
                  Our faculty, facilities, and programs create a dynamic
                  learning environment that prepares students for successful
                  careers. With experiential learning, support services, and a
                  vibrant campus community, we empower you to achieve your goals
                  and unlock your potential as a future leader. Join us for an
                  exciting journey of academic excellence and professional
                  growth at Hensard University's Undergraduate Section.
                </p>
                <div className="xui-mt-2">
                  <ButtonStyleI path="/department" text="Learn sMore" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="xui-max-w-350 xui-py-2 xui-px-1 hensard-programs-box">
                <h2 className="xui-font-sz-125 xui-lg-font-sz-120">
                  FOUNDATION SCHOOL
                </h2>
                <p className="xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1">
                  The Foundation School at Hensard University is dedicated to
                  providing a strong academic foundation for students embarking
                  on their higher education journey. With a focus on
                  comprehensive preparatory courses and personalized support, we
                  empower students to develop the necessary skills, knowledge,
                  and confidence to thrive in their future degree programs. Our
                  experienced faculty and tailored curriculum create an engaging
                  learning environment that fosters critical thinking, effective
                  study habits, and a strong academic mindset.
                </p>
                <div className="xui-mt-2">
                  <ButtonStyleI path="/" text="Learn More" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="xui-max-w-350 xui-py-2 xui-px-1 hensard-programs-box">
                <h2 className="xui-font-sz-125 xui-lg-font-sz-120">
                  MASTER’S DEGREE
                </h2>
                <p className="xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a.
                </p>
                <div className="xui-mt-2">
                  <ButtonStyleI path="/" text="Learn More" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="xui-max-w-350 xui-py-2 xui-px-1 hensard-programs-box">
                <h2 className="xui-font-sz-125 xui-lg-font-sz-120">
                  DOCTORATE DEGREE
                </h2>
                <p className="xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a.
                </p>
                <div className="xui-mt-2">
                  <ButtonStyleI path="/" text="Learn More" />
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
    </>
  );
};

export default Programs;

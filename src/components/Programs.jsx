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
                  FOUNDATION
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

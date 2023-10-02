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
              Lorem ipsum lorem ipsum
            </h1>
            <p className="xui-mt-1 xui-line-height-2 xui-opacity-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus.
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
                    23,456+
                  </h2>
                  <p>Students admitted to Hensard</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    23,456+
                  </h2>
                  <p>Students admitted to Hensard</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    23,456+
                  </h2>
                  <p>Students admitted to Hensard</p>
                </div>
                <div className="xui-py-3 xui-px-3 xui-bdr-s-solid xui-bdr-w-1 xui-bdr-fade">
                  <h2 className="xui-font-w-bolder xui-font-sz-120 xui-lg-font-sz-200">
                    23,456+
                  </h2>
                  <p>Students admitted to Hensard</p>
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

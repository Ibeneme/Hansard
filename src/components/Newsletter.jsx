import { Notepad2, UserCirlceAdd } from "iconsax-react";

const Newsletter = () => {
  return (
    <>
      <section className="hensard-newsletter xui-container xui-py-3 xui-lg-py-6 hensard-bg-blue">
        <div className="xui-text-center">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p className="xui-mt-1 xui-opacity-8">
            Never miss interesting happenings by joining our newsletter program.
          </p>
        </div>
        <div className="hensard-newsletter-form-box xui-max-w-800 xui-w-fluid-100 xui-mx-auto xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
          <div className="xui-d-flex xui-flex-ai-center">
            <div className="xui-d-none xui-lg-d-inline">
              <Notepad2 size={32} variant="Bulk" />
            </div>
            <div>
              <form className="hensard-form xui-lg-ml-1" action="">
                <input type="text" placeholder="Enter your email address" />
              </form>
            </div>
          </div>
          <div>
            <button
              className="xui-btn xui-btn-white xui-font-w-bold xui-bdr-rad-5 xui-lg-py-1 xui-lg-px-3 xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center"
              style={{ color: "var(--blue)" }}
              type="submit"
            >
              <span className="xui-d-none xui-lg-d-inline">Subscribe</span>
              <span className="xui-lg-d-none">
                <UserCirlceAdd size={28} color="var(--blue)" variant="Bold" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;

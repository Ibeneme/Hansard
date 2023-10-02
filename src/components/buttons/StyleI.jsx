/* eslint-disable react/prop-types */
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

const ButtonStyleI = (props) => {
  const { path, text, color } = props;
  return (
    <>
      <Link
        to={path}
        className="xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-text-white xui-text-dc-none hensard-btn-i"
        style={
          color != undefined
            ? { backgroundColor: `${"#FFFFFF"}`, color: `${color}` }
            : null
        }
      >
        <span
          data-aos="zoom-in"
          className="xui-font-sz-90 xui-d-inline-block xui-ml-1 xui-mr-3"
        >
          {text}
        </span>
        <div
          data-aos="zoom-in"
          className="xui-w-40 xui-h-40 xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center hensard-bg-blue xui-bdr-rad-circle"
          style={color != undefined ? { backgroundColor: `${color}` } : null}
        >
          <ArrowRight data-aos="zoom-in" size={20} color="#FFFFFF" />
        </div>
      </Link>
    </>
  );
};

export default ButtonStyleI;

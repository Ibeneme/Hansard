import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const FundingComponent = () => {
  return (
    <div>
      {" "}
      <div className="ikenna-funding-next-div">
        <div className="ikenna-funding-next-div-img">
          <img
            className="ikenna-funding-next-img-img"
            src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696050622/divaris-shirichena-04Rd4wrSI1M-unsplash_z0idpu.jpg"
            alt="grad"
          />
        </div>
        <div className="funding-right-red-box">
          <div>
            <h1>Hensard University International Excellence Scholarship</h1>
          </div>
          <div>
            <p
              style={{
                lineHeight: 2,
              }}
            >
              {" "}
              Hensard University International Excellence Scholarship is for
              non-Nigerian (or holders of citizenship other than Nigeria)
              Master's applicants seeking on-campus admission to Hensard
              University. The scholarship is only open to non-Nigerian
              candidates admitted into any of Hensard’s Masters Programs and
              shall be for a period of 18-months.
            </p>
          </div>

          <div
            style={{
              marginTop: "48px",
              marginBottom: "48px",
            }}
          >
            <span className="ikenna-funding-span-opposite">
              Apply Now <BiRightArrowAlt />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingComponent;

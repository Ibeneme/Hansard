import React, { useState } from "react";
import "../../styling/research.css";
import { researchData } from "../../Data/Centre";
import Footer from "../../../components/Footer";

const ResearchAreas = () => {
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div>
      <div
        style={{
          marginTop: "44px",
          height: "fit-content",
          gap: "16px",
        }}
        className="ikenna-research-areas-second-div"
      >
        <h1>Research Areas at Hensard University</h1>
      </div>
      {/* {researchData.slice(startIndex, endIndex).map((data, index) => (
     */}
      {researchData.map((data, index) => (
        <div
          key={index}
          style={{
            marginTop: 0,
            height: "fit-content",
            gap: "16px",
          }}
          className="ikenna-research-areas-second-div"
        >
          <div key={index} className="ikenna-research-areas-first-div">
            <>
              <div className="ikenna-research-areas-second-div-gap">
                <h2 className="ikenna-research-areas-h1">{data.title}</h2>
              
                <p className="ikenna-research-areas-p1">{data.description}</p>
              </div>
              <div className="ikenna-research-areas-img-div">
                <img
                  className="ikenna-research-areas-img"
                  src={data.imgSrc}
                  alt={data.altText}
                />
                <div>
                  <p className="ikenna-research-areas-p2">
                    {data.researcherName}
                  </p>
                  <p className="ikenna-research-areas-p3">{data.faculty}</p>
                </div>
              </div>
            </>
          </div>
          <div>
            <img
              src={data.imgSrc2}
              className="ikenna-research-areas-img-img"
              alt="ibeneme"
            />
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {/* <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= researchData.length}
        >
          Next
        </button>
      </div> */}
    </div>
    <Footer />
    </div>
  );
};

export default ResearchAreas;

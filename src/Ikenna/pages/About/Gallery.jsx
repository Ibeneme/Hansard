import React, { useState } from "react";
import GalleryData from "../../Data/Gallery";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const FacultyButton = ({ faculty, onClick }) => (
  <button onClick={onClick} style={{ margin: "5px" }}>
    {faculty.name}
  </button>
);

const FacultyDetail = ({ selectedFaculty }) => (
  <div>
    <h3>{selectedFaculty.name}</h3>
    <div>
      {selectedFaculty.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${selectedFaculty.name} Image ${index + 1}`}
          style={{ width: '48.3%', height: "150px", margin: "5px" }}
        />
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div>
      <Navbar/>
      <div>
        <div className="ikenna-funding-first-div">
          <h1 className="ikenna-funding-first-h1">Gallery</h1>
        </div>
        <div>
          <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
            <div className="ikenna-maps-address-first-div">
              <h2>Faculty Gallery</h2>
              <div style={{
                width: '100%',
                backgroundColor:'red'
              }}>
                {GalleryData.map((faculty, index) => (
                  <FacultyButton
                  style={{
                    width: '100%'
                  }}
                    key={index}
                    faculty={faculty}
                    onClick={() => handleFacultyClick(faculty)}
                  />
                ))}
              </div>
              <div>
                {selectedFaculty && (
                  <FacultyDetail selectedFaculty={selectedFaculty} />
                )}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

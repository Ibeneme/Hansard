import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { LibraryData } from "../../Data/Library";
import Navbar from "../../../components/Navbar";

const Library = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Library</h1>
      </div>
      <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
        <div className="ikenna-maps-address-first-div">
          <div className="ikenna-flex">
            <div
              style={{
                width: "100%",
              }}
            >
              <img
                width="100%"
                src="https://res.cloudinary.com/dqa2jr535/image/upload/v1696137851/inaki-del-olmo-NIJuEQw0RKg-unsplash_y0x4cm.jpg"
                alt="library"
                style={{
                  borderRadius: 12,
                  height: 500,
                  width: "100%",
                }}
              />
            </div>

            <div
              style={{
                width: "100%",
              }}
            >
              <h2>Our Library</h2>
              <p className="ikenna-maps-address-new-p">
                Welcome to Hensard University Library, the repository of human
                knowledge, where you can conductively learn to live. Hensard
                University Library collection is designed to support your study,
                learning, research, and leisure. It is well stocked and
                well-equipped with current books and journals that have given
                the University a competitive edge among equals. It is the
                responsibility of the University Library to select, acquire,
                process, organize, disseminate, and preserve relevant materials
                to support the Curricula, and the programs accredited by the
                National Universities’ Commission. Similarly, the Library
                ensures it creates a favorable environment conducive for
                learning, teaching, research, and leisure. In order to succeed
                in a standard-quality setting like Hensard University, you must
                determine to apply yourself seriously to your studies and use
                wisely the enormous Library resources assembled to facilitate
                your education here at Hensard University. The Library staff
                will assist you to locate, select, and obtain the germane
                Information you need to enhance your studies. Hensard University
                Library resources wholly support Hensard University Vision and
                Mission to establish and maintain a most suitable academic
                environment for imparting knowledge to modernize Nigeria and the
                world at large.
              </p>
            </div>
          </div>
          <div>
            <h3 className="ikenna-maps-address-new-h3">
              Library Services Offered
            </h3>
            <p className="ikenna-maps-address-new-p">
              Reference and Information assistance is available in person at the
              information desk or by phone. The Library offers Reference and
              Circulation services, Digital databases Collection Development,
              Online searches, Research Counseling, Bibliographies, dedicated
              e-library workstations, institutional wi-fi facilities for
              printing, reprography, and scanning of bibliographic materials, and
              document-delivery services. The Library also offers Current
              Awareness Services (CAS) Selective Dissemination of Information
              (SDI), Indexing and abstracting services, book review, bindery
              services amongst others.
            </p>

            <h3 className="ikenna-maps-address-new-h3">
              Digital Library Resources
            </h3>
            <p className="ikenna-maps-address-new-p">
              The e-library of the University is a major resource of the library
              with over 60 dedicated computers for students and staff use. The
              University Library website provides links to these numerous
              digital resources both paid and Open Access, which include, but
              are not limited to: E-Granary, Lexis Nexis, Hine Online, Law Pavilion,
              Legalpedia, Elsevier, Library Genesis, OECD, Science Direct, IEEE,
              Z-Library, IJSER, Tailor & Frances, Bold scholar, EBSCOHOST,
              AGORA, ebrary, DOAJ, CORE, DOAB, African Journals Online (AJOL),
              PDF, Google Scholar, Scopus, NUC Virtual Library, Library on a
              Flash (LOAF) etc., You can access and download from these
              databases hundreds of current and back-issues of many
              peer-reviewed e-Journals and e-books of Nigerian and international
              sources for your research.
            </p>

            <h3 className="ikenna-maps-address-new-h3">
              Online Public Access Catalogue (OPAC)
            </h3>
            <p className="ikenna-maps-address-new-p">
              The Library OPAC contains all the print collections of the library
              and it is hosted on KOHA, an online Integrated Library System.
              KOHA provides you the opportunity to browse the library
              collections online campus-wide, make reservations, and manage your
              user account. You must register with the Library with your
              University I.D. to gain access. The Library staff can only give
              loans to users who have registered and activated their membership
              account with the Library. Our online catalogue is searchable from
              the library website: http://library@hensarduniversity.edu.ng.
              Licensed electronic resources can only be accessed from the
              Hensard University Intranet. New books are displayed regularly on
              new arrival shelves and shown on the Library website. Reprography
              and Guided Tours: The Library is equipped with a laser printer and
              a multifunction printer. Printing and scanning are enabled for all
              Library users. Library Tour and Orientation and guided tours of
              the Library are available upon request.
            </p>
          </div>
          <div
            style={{
              marginTop: 48,
            }}
          >
            {LibraryData.map((item, index) => (
              <div key={index} className="item-container">
                <h3
                  onClick={() => handleItemClick(index)}
                  className={`item-title ${
                    expandedItem === index ? "expanded-title" : ""
                  }`}
                >
                  {item.title}
                </h3>
                {expandedItem === index && (
                  <div>
                    <p className="ikenna-maps-address-p ikenna-expanded">
                      {item.description1}
                    </p>
                    {item.description2 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description2}
                      </p>
                    ) : null}
                    {item.description3 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description3}
                      </p>
                    ) : null}
                    {item.description4 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description4}
                      </p>
                    ) : null}
                    {item.description5 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description5}
                      </p>
                    ) : null}
                    {item.description6 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description6}
                      </p>
                    ) : null}
                    {item.description7 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description7}
                      </p>
                    ) : null}
                    {item.description8 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description8}
                      </p>
                    ) : null}
                    {item.description9 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description9}
                      </p>
                    ) : null}
                    {item.description10 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description10}
                      </p>
                    ) : null}
                    {item.description11 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description11}
                      </p>
                    ) : null}
                    {item.description12 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description12}
                      </p>
                    ) : null}
                    {item.description13 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description13}
                      </p>
                    ) : null}
                    {item.description14 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description14}
                      </p>
                    ) : null}
                    {item.description15 ? (
                      <p className="ikenna-maps-address-p ikenna-expanded">
                        {item.description15}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Library;

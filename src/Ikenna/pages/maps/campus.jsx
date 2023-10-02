import React from "react";
import MapContact from "../../components/research/Maps";
import "../../styling/maps.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";


const CampusComponent = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="ikenna-funding-first-div">
          <h1 className="ikenna-funding-first-h1">Campus</h1>
        </div>
        <div className="ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div className="ikenna-maps-location-first-div">
              <div className="ikenna-maps-location-second-div">
                <h3 className="ikenna-maps-address-h3"> Our Campus</h3>
                <p className="ikenna-maps-address-p">
                  Hensard University is located in Toru-Orua community in
                  Sagbama Local Government Area of Bayelsa State on the shores
                  of the storied River Forcados. Toru-Orua is 45 minutes’ drive
                  from the Bayelsa International Airport and Yenagoa the State
                  capital. Other airports through which the community could be
                  accessed are from the Port Harcourt International Airport,
                  about 90mins away, Owerri Airport, 179km, Osubi Airport, Warri
                  109km. The more adventurous can also come by river. Map needed
                  with hyperlink, add kilometres and the hours. (university)
                </p>
              </div>
              <div className="ikenna-maps-location-second-div">
                <h3 className="ikenna-maps-address-h3">
                  {" "}
                  Hensard University Address
                </h3>
                <p className="ikenna-maps-address-p">
                  1 Nanaye Dickson Road,
                  <br />
                  Toru-Orua, <br />
                  Sagbama LGA, <br />
                  Bayelsa State, <br />
                  P.O. box 1036.
                </p>
              </div>
            </div>
            <div className="ikenna-maps">
              <MapContact width="100%" height="500" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampusComponent;

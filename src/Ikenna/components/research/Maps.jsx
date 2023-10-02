import React from "react";

const MapContact = ({width, height}) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15896.026311282141!2d6.047883394158031!3d5.102634580347094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041de1d666d1fab%3A0x63f91740bc2ef1b3!2s561101%2C%20Toru-Orua%2C%20Bayelsa!5e0!3m2!1sen!2sng!4v1696123723321!5m2!1sen!2sng"
        width={width}
        height={height}
        style={{ border: 0 }}  ></iframe>
    </div>
  );
};

export default MapContact;

import React from 'react';
import cert1 from "../img/cert1.jpg";
import cert2 from "../img/cert2.jpg";
import cert3 from "../img/cert3.jpg";
import "./CertificateImagesStyles.css"; 


const CertificateImages = () => {
  return (
    <div className="certificate-images">
      <img src={cert1} alt="Certificate 1" />
      <img src={cert2} alt="Certificate 2" />
      <img src={cert3} alt="Certificate 3" />
    </div>
  );
}

export default CertificateImages;

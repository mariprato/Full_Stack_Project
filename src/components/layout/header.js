import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const scrollToHowTo = () => {
    document
      .getElementById("how-to-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="title-section">
        <img src="images/fureverfound.png" alt="FureverFound Title Image" />
        <h2>Bringing lost pets back to their loving arms</h2>
      </div>
      <div className="image-section">
        <img src="images/Header.jpeg" alt="Header Image" />
      </div>
      <div className="arrow-down" onClick={scrollToHowTo}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </>
  );
}

export default Header;

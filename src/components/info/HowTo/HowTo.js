import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowTo.css";
import ButtonComponent from "../../generic/button/ButtonComponent";
import { goToTopOfPage } from "../../../utils/goToTopOfPage";

const HowTo = () => {
  const navigate = useNavigate();
  
  return (
    <div id="how-to-section">
      <h1 className="how-titles">
        How{" "}
        <img
          src="/images/fureverfound.png"
          alt="Fur-Ever Found Logo"
          className="how-title"
        />{" "}
        Works
      </h1>
      <div className="how-container">
        <div className="how-top">
          <h2 className="how-titles">My Pet Is Lost</h2>
          <img
            className="how-top-img"
            src="/images/HowInfoDiagram.png"
            alt="Sequential cartoon-style depiction of the lost pet website process. Includes a person submitting pet details, a team of moderators reviewing submissions, a webpage displaying shared pet information, and a smartphone notification for found pets."
          />
          <ButtonComponent
            variant="button-post-pink"
            onClick={() => goToTopOfPage(navigate, "/submissionForm")}
          >
            Post Now
          </ButtonComponent>
        </div>
        <div className="how-bottom">
          <h2 className="how-titles">I Have Seen a Lost Pet</h2>
          <img
            className="how-bottom-img"
            src="/images/HowInfoDiagram2.png"
            alt="Sequential cartoon-style depiction of the process for reporting a lost pet sighting. Includes a person spotting a lost pet, visiting the website to click the 'Contact Us' button, and the team quickly notifying the pet's owner."
          />
          <ButtonComponent variant="button-post-pink" onClick={() => goToTopOfPage(navigate, "/lostPets")}>
            Lost Pets
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HowTo;

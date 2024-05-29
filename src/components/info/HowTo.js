import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowTo.css";
import ButtonComponent from "../generic/ButtonComponent";

const HowTo = () => {
  const navigate = useNavigate();

  const goToSubmissionForm = () => {
    navigate("/submissionForm");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const goToLostPets = () => {
    navigate("/lostPets");
    window.scrollTo(0, 0);
  };

  return (
    <div id="how-to-section">
      <h1>
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
          <h2>My Pet Is Lost</h2>
          <img
            className="how-top-img"
            src="/images/HowInfoDiagram.png"
            alt="Sequential cartoon-style depiction of the lost pet website process. Includes a person submitting pet details, a team of moderators reviewing submissions, a webpage displaying shared pet information, and a smartphone notification for found pets."
          />
          <ButtonComponent
            variant="button-post-pink"
            onClick={goToSubmissionForm}
          >
            Post Now
          </ButtonComponent>
        </div>
        <div className="how-bottom">
          <h2>I Have Seen a Lost Pet</h2>
          <img
            className="how-bottom-img"
            src="/images/HowInfoDiagram2.png"
            alt="Sequential cartoon-style depiction of the process for reporting a lost pet sighting. Includes a person spotting a lost pet, visiting the website to click the 'Contact Us' button, and the team quickly notifying the pet's owner."
          />
          <ButtonComponent variant="button-post-pink" onClick={goToLostPets}>
            Lost Pets
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HowTo;

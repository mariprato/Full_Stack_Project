import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowTo.css";
import ButtonComponent from "../../generic/button/ButtonComponent";

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
          <img className="how-top-img" src="/images/LostPet.jpg" alt="" />
          <ButtonComponent
            variant="button-post-pink"
            onClick={goToSubmissionForm}
          >
            Post Now
          </ButtonComponent>
        </div>
        <div className="how-bottom">
          <h2>I Have Seen a Lost Pet</h2>
          <img className="how-bottom-img" src="/images/LostPet.jpg" alt="" />
          <ButtonComponent variant="button-post-pink" onClick={goToLostPets}>
            Lost Pets
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HowTo;

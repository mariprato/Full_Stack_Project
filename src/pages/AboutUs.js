import React, { useState, useEffect } from "react";
import UsCard from "../components/cards/UsCard/UsCard.js";
import colleagueData from "../databases/aboutusDatabase.js";
import "./AboutUs.css";
import Layout from "../components/layout/layout/Layout.js";

const AboutUs = () => {
  const [colleagueToDisplay, setColleagueToDisplay] = useState([]);

  useEffect(() => {
    setColleagueToDisplay(colleagueData);
  }, []);

  return (
    <>
      <Layout>
        <div
          className="colleague-members-layout"
          style={{ paddingTop: "50px" }}
        >
          <h1>Our team</h1>
          <div className="colleague-cards-container">
            <div className="row">
              {colleagueToDisplay.slice(0, 2).map((colleague) => (
                <UsCard key={colleague.id} colleague={colleague} />
              ))}
            </div>
            <div className="row">
              {colleagueToDisplay.slice(2, 5).map((colleague) => (
                <UsCard key={colleague.id} colleague={colleague} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;

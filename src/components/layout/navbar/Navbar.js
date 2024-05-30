import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../generic/button/ButtonComponent";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the current location matches the given path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="top-nav">
        <div className="left-section">
          <div className="navbar-symbol">
            <a href="https://www.instagram.com">
              <FontAwesomeIcon className="contact-icons" icon={faInstagram} />
            </a>
          </div>
          <div className="navbar-symbol">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon className="contact-icons" icon={faFacebookF} />
            </a>
          </div>
          <div className="navbar-symbol">
            <a href="https://www.threads.net/">
              <FontAwesomeIcon className="contact-icons" icon={faThreads} />
            </a>
          </div>
          <div className="navbar-symbol">
            <a href="https://www.pinterest.com">
              <FontAwesomeIcon className="contact-icons" icon={faPinterestP} />
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="navbar-contact">
            <FontAwesomeIcon className="contact-icons" icon={faPhone} />
            (000) 000 000
          </div>
          <div className="navbar-contact">
            <a
              className="navbar-email"
              href="mailto:enquiry@fur-everfound.com"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
              enquiry@fur-everfound.com
            </a>
          </div>
        </div>
      </div>
      <div className="overlay">
        <div className="overlay-left">
          <div className="logo" onClick={() => navigate("/")}>
            <img
              src="/images/MagicEraser_240512_152556 2.png"
              alt="Fur-Ever Found Logo of cute cat and dog"
            />
          </div>
          <div className="title-logo">
            <div className="fur-ever-navbar" onClick={() => navigate("/")}>
              {location.pathname !== "/" && (
                <img src="/images/fureverfound.png" alt="Fur-Ever Found Logo" />
              )}
            </div>
          </div>
        </div>
        <div className="overlay-right">
          <a
            className={`overlay-links ${isActive("/") ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a
            className={`overlay-links ${isActive("/lostPets") ? "active" : ""}`}
            onClick={() => navigate("/lostPets")}
          >
            Lost Pets
          </a>
          <a
            className={`overlay-links ${isActive("/aboutUs") ? "active" : ""}`}
            onClick={() => navigate("/aboutUs")}
          >
            About Us
          </a>
          <ButtonComponent
            variant="button-post-pink"
            onClick={() => {
              navigate("/submissionForm");
              window.location.reload();
            }}
          >
            Post Now
          </ButtonComponent>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

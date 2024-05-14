import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="top-nav">
        <div className="left-section">
          <div className="navbar-symbol">
            <FontAwesomeIcon className="contact-icons" icon={faInstagram} />
          </div>
          <div className="navbar-symbol">
            <FontAwesomeIcon className="contact-icons" icon={faFacebookF} />
          </div>
          <div className="navbar-symbol">
            <FontAwesomeIcon className="contact-icons" icon={faThreads} />
          </div>
          <div className="navbar-symbol">
            <FontAwesomeIcon className="contact-icons" icon={faPinterestP} />
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
        <div className="logo">
          <img src="/image/MagicEraser_240512_152556 2.png" />
        </div>
        <div className="overlay-right">
          <a className="overlay-links">Home</a>
          <a className="overlay-links">Lost Pets</a>
          <a className="overlay-links">Details</a>
          <a className="overlay-links">Contact Us</a>
          {/* BUTTON COMPONENT HERE */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

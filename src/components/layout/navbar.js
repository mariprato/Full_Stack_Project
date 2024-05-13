import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="top-nav">
        <div className="left-section">
          <div className="navbar-symbol">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="navbar-symbol">Symbol 2</div>
          <div className="navbar-symbol">Symbol 3</div>
        </div>
        <div className="right-section">
          <div className="navbar-contact">phone number here</div>
          <a
            className="navbar-contact"
            href="mailto:best.amiker@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            email@mail.com
          </a>
        </div>
      </div>
      <div className="overlay">
        <div className="logo">
          <img src="/image/MagicEraser_240512_152556 2.png" />
        </div>
        <div className="page-links">
          <a>one</a>
          <a>one</a>
          <a>one</a>
          <a>one</a>
          <a>one</a>
          <button>button</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

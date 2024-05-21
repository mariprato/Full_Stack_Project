import React from "react";
import "./ButtonPostNow.css";
import { useNavigate } from "react-router-dom";

function ButtonPostNow(props) {
  const navigate = useNavigate();

  return (
    <button
      className="button-post-now"
      onClick={() => navigate("/submissionForm")}
    >
      {props.text}
    </button>
  );
}

export default ButtonPostNow;

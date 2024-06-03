import React from "react";
import "./Modal.css";
import ButtonComponent from "../../generic/button/ButtonComponent";

const Modal = ({ show, onClose }) => {
  if (show) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {show && (
        <div className="modal">
          <div onClick={onClose} className="modal-overlay"></div>
          <div className="modal-content">
            <h2>We have received your form</h2>
            <p>
              Congratulations! You are one step closer to being reunited with your pet. You will shortly receive a confirmation email.
            </p>
            <ButtonComponent variant="button-close-modal" onClick={onClose}>
              CLOSE
            </ButtonComponent>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

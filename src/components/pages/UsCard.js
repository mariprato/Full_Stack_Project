import React from "react";
import './UsCard.css';

const UsCard = ({ colleague }) => {
  return (
    <div className="colleague-card">
      <div className="colleague-info">
        <div className="image-container">
          <img
            className="colleague-image"
            src={`../images/${colleague.image}`}
            alt={`Image of ${colleague.name}`}
          />
        </div>
        <div className="card-text">
          <p>{colleague.name}</p>
          <p className="details">{colleague.details}</p>
        </div>
      </div>
    </div>
  );
};

export default UsCard;

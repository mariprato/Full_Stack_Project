// import React from "react";
// import './UsCard.css';

// const UsCard = ({ colleague }) => {
//   return (
//     <div className="colleague-card">
//       <div className="image-container">
//         <img className="colleague-image" src={`../images/${colleague.image}`} alt={`Image of ${colleague.name}`} />
//       </div>
//       <div className="card-text">
//         <p>{colleague.name}</p>
//         <p className="details">{colleague.details}</p>
//       </div>
//     </div>
//   );
// };

// export default UsCard;

// import React, { useState } from "react";
// import './UsCard.css';

// const UsCard = ({ colleague }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="colleague-card">
//       <div className="image-container">
//         <img className="colleague-image" src={`../images/${colleague.image}`} alt={`Image of ${colleague.name}`} />
//       </div>
//       <div className="card-text">
//         <p onClick={toggleDetails}>{colleague.name}</p>
//         {showDetails && <p className="details">{colleague.details}</p>}
//       </div>
//     </div>
//   );
// };

// export default UsCard;

import React, { useState } from "react";
import './UsCard.css';

const UsCard = ({ colleague }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="colleague-card">
      <div className="colleague-info">
        <div className="image-container">
          <img className="colleague-image" src={`../images/${colleague.image}`} alt={`Image of ${colleague.name}`} />
        </div>
        <div className="card-text">
          <p onClick={toggleDetails}>{colleague.name}</p>
        </div>
      </div>
      {showDetails && (
        <div className="details-container">
          <p className="details">{colleague.details}</p>
        </div>
      )}
    </div>
  );
};

export default UsCard;




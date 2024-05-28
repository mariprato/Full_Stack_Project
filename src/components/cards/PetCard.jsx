import './PetCard.css';
import {Link} from "react-router-dom";

const PetCard = ({pet}) => {   
    return ( 
        <>
        <Link to = {`/petInfo/${pet.id}`}>
        <div className="pet-card">
            <div className = "pet-image-container">
                {!pet.found &&
                    <div className="information-overlay">
                        <p className = "overlay-text">Name: {pet.name}</p>
                        <p className = "overlay-text">Species: {pet.type}</p>
                        <p className = "overlay-text">Location: {pet.location}</p>
                        <p className = "overlay-text">Last Seen: {pet.dateLastSeen}</p>
                    </div>}

                {pet.found &&
                <div className = "found-overlay">
                    <img className="banner-picture" src="../images/banner.png"/>
                </div>}

                <div>
                    <img className="pet-image" src={`../images/${pet.id}.jpg`} alt={`${pet.name} the lost ${pet.type}.`}></img>
                </div>
            </div>
            <div className = "pet-card-text"><p>{pet.name}, {pet.location}</p></div>

        </div>
        </Link>
        </>
     );
}
 
export default PetCard;
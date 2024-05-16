import { useState } from "react";
import './dropdown.css';

const Dropdown = ({options, onClick}) => {
    const [open, setOpen] = useState(false)

    const handleClick = (option) => {
        onClick(option)
        toggleOpen()
    }

    const toggleOpen = () => {
        setOpen(!open)
    }
    
    return ( 
        <div className="filter-buttons-container">
            <div>
                <button className="filter-button" onClick={toggleOpen}>Filter by:</button>
            </div>
            <div className="options-buttons-container">
                {open &&
                options.map((option) => (
                    <button className="options-button" onClick={() => handleClick(option)}>{option}</button>
                ))}
            </div>
            

        </div> 
    );
}
 
export default Dropdown;
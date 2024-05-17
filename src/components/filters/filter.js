import { useState } from "react";
import './filter.css';

const Filter = ({options, onClick, currentlySelected, filterMethod}) => {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(!open)
    }

    const getClass = (option) => {
        if (option === currentlySelected){
            return "options-button current-option"
        } else {
            return "options-button"
        }
    }
    
    return ( 
        <div className="filter-buttons-container">
            <div>
                <button className="filter-button" onClick={toggleOpen}>{filterMethod}:</button>
            </div>
            <div className="options-buttons-container">
                {open &&
                options.map((option, index) => (
                    <button key={index} className={getClass(option)} onClick={() => onClick(option)}>{option}</button>
                ))}
            </div>
            

        </div> 
    );
}
 
export default Filter;
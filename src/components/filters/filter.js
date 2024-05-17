import { useState } from "react";
import './filter.css';

const Filter = ({ options, onClick, currentlySelected, filterMethod }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleOptionClick = (option) => {
        onClick(option);
        setOpen(false);
    };

    return (
        <div className="filter-buttons-container">
            <div>
                <button className="filter-button" onClick={toggleOpen}>
                    {filterMethod}:
                </button>
            </div>
            {open && (
                <div className="options-buttons-container">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={
                                option === currentlySelected
                                    ? "options-button current-option"
                                    : "options-button"
                            }
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Filter;

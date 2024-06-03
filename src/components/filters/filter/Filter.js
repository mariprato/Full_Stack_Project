import { useState } from "react";
import './Filter.css';
import ButtonComponent from "../../generic/button/ButtonComponent";

// This code defines a React component for a filter with a dropdown menu, allowing users to select an option from a list and clear the filters.


const Filter = ({ options, onClick, currentlySelected, filterMethod, clearFilters }) => {
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
                <ButtonComponent variant="button-filter" onClick={toggleOpen}>
                    {filterMethod}:
                </ButtonComponent>
            </div>
            {open && (
                <div className="options-buttons-container">
                    {options.map((option, index) => (
                        <ButtonComponent
                            key={index}
                            variant="button-filter-options"
                            className={option === currentlySelected ? "current-option" : ""}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </ButtonComponent>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Filter;

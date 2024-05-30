import { useState } from "react";
import './Filter.css';
import ButtonComponent from "../../generic/button/ButtonComponent";

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

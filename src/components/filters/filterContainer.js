import { useState } from "react";
import './filterContainer.css';

const FilterContainer = ({children}) => {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(!open)
    }

    return ( 
        <div className="page-container">
            <div>
                <button className="filter-button" onClick={toggleOpen}>Filter by:</button>
            </div>
            <div className="filters-container">
                {open && 
                <div>{children}</div>}
            </div>
            

        </div> 
    );
}
 
export default FilterContainer;
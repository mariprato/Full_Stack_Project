import { useState } from "react";
import './filterContainer.css';
import ButtonComponent from "../ButtonComponent";

const FilterContainer = ({children}) => {
    const [open, setOpen] = useState(false)
    
    const toggleOpen = () => {
        setOpen(!open)
    }

    return ( 
        <div className="page-container">
            <div>
                <ButtonComponent variant="button-filter" onClick={toggleOpen}>Filter by:</ButtonComponent>
            </div>
            <div className="filters-container">
                {open && 
                <div>{children}</div>}
            </div>
            

        </div> 
    );
}
 
export default FilterContainer;
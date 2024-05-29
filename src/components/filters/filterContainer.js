import { useState } from "react";
import './filterContainer.css';
import ButtonComponent from "../generic/ButtonComponent";

const FilterContainer = ({children}) => {
    return ( 
        <div className="page-container">
            <div>
                <ButtonComponent variant="button-filter">Filter by:</ButtonComponent>
            </div>
            <div className="filters-container">
                {children}
            </div>
        </div> 
    );
}
 
export default FilterContainer;
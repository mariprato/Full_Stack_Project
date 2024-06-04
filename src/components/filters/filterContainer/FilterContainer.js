import { useState } from "react";
import './FilterContainer.css';
import ButtonComponent from "../../generic/button/ButtonComponent";

// This code defines a React component that serves as a container for filter options, displaying a button to trigger the filters and rendering child components inside a styled container.


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
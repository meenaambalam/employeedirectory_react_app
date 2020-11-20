import React from "react";
import "./SearchInput.css";

// Functional Component for the "Search" Input Box
function SearchInput(props){
    return (
        <div>
            <span><b>Search by Name : </b>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="search-input"
                placeholder="Enter a name to search"
                id="search"
            />
            </span>
        </div>
    )
}

export default SearchInput;
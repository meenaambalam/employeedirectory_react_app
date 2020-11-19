import React from "react";

function SearchInput(props){
    return (
        <div>
            <input
                onChange={props.handleInputchange}
                value={props.search}
                name="search"
                type="text"
                className="search-input"
                placeholder="Search"
                id="search"
            />
        </div>
    )
}

export default SearchInput;
import React from "react";

function SearchResult(props){
    console.log("PROPS: ", props);
    const fullName = props.empResults.title + "." + props.empResults.first + " " + props.empResults.last;
    return (
        <ul className="list-group">
            <p>
                {props.empResults.title}
            </p>
            {/* {props.empResults.map(result => (
                <li className="list-group-item" key={result.id}>
                    <img alt={fullName} className="img-fluid" src={result.picture.thumbnail} />
                </li>
            ))} */}
        </ul>
    );
}

export default SearchResult;
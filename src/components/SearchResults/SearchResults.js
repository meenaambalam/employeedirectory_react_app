import React from "react";

function SearchResult(props){

    console.log("PROPS: ", props);
    console.log("PROPS Empresults: ", props.empResults[0]);

    const {first, last, age, phone, email, picture} = props;
    console.log("name: ", name);
    console.log("dob: ", dob);
    return (
        <ul className="list-group">

            {/* Object.keys(props.empResults).forEach(key => {
                console.log(key, obj[key]);
            }) */}
            {/* {props.empResults.map(result => (
                    <li className="list-group-item" key={result.id} fullname={result.first || " " || result.last}>
                        <img alt={result.title} className="img-fluid" src={result.picture.thumbnail} />
                    </li>
            ))} */}
        </ul>
    );

}

export default SearchResult;
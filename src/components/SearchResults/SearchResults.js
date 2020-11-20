import React from "react";
import "./SearchResults.css";

// Functional component for displaying the Employee Information in Table Form
// Props were passed down from SearchContainer Class Component
function SearchResult(props) {

    console.log("PROPS #1: ", props);
    // function to render each employee row
    const renderRow = (result) => {
        return (
            <tr key={result.id.value}>
                <td><img src={result.picture.thumbnail} alt={result.name.first} className="img-fluid" style={{ margin: "0 auto" }}/></td>
                <td>{result.fullName}</td>
                <td>{result.age}</td>
                <td>{result.cell}</td>
                <td>{result.email}</td>
            </tr>
        )
    }

    // html tags that are built and sent back to its parent component
    // uses the props that were sent from the parent component
    
    return (
        <table id="employees">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={props.handleSortName}><span>Name   </span><i className="fa fa-sort-down"></i></th>
                    <th onClick={props.handleSortAge}><span>Age  </span><i className="fa fa-sort-down"></i></th>
                    <th onClick={props.handleSortPhone}><span>Phone </span> <i className="fa fa-sort-down"></i></th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.empResults.filter(emp => emp.fullName.toLowerCase().includes(props.search.toLowerCase())).map(result =>   //filter employees by Name search
                    renderRow(result)   
                )}
            </tbody>
        </table>
    );

}

export default SearchResult;
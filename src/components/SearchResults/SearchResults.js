import React from "react";
import "./SearchResults.css";
// import TableHeader from "../TableHeader/TableHeader";
// import TableRow from "../TableRow/TableRow";

function SearchResult(props) {

    console.log("PROPS #1: ", props);
    // console.log("PROPS Empresults: ", props.empResults[0]);

    const renderRow = (result) => {
        return (
            <tr key={result.id.value}>
                <td><img src={result.picture.thumbnail} alt={result.name.first} className="img-fluid" style={{ margin: "0 auto" }}/></td>
                <td>{result.fullName}</td>
                <td>{result.email}</td>
                <td>{result.dob.age}</td>
                <td>{result.cell}</td>
            </tr>
        )
    }

    return (
        <table id="employees">
            <thead>
                <tr>
                    <th key="image">Image</th>
                    <th key="name" onClick={props.handleSortName}>Name</th>
                    <th key="mail">Email</th>
                    <th key="age">Age</th>
                    <th key="phone">Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.empResults.filter(emp => emp.fullName.toLowerCase().includes(props.search.toLowerCase())).map(result =>
                    renderRow(result)
                )}
            </tbody>
            {/* <TableHeader />
            <TableRow empResults={props} /> */}

        </table>
    );

}

export default SearchResult;
import React from "react";


function TableRow(props) {

    console.log("PROPS: ", props);
    console.log("PROPS Empresults: ", props.empResults[0]);

    const renderRow = (result) => {
        return (
            <tr key={result.id.value}>
                <td>{result.picture.thumbnail}</td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.email}</td>
                <td>{result.dob.age}</td>
                <td>{result.cell}</td>
            </tr>
        )
    }

    return (
        <tbody>
            {props.empResults.map(result =>
                renderRow(result)
            )}
        </tbody>
    );

}

export default TableRow;
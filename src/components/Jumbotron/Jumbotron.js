import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1>Employee Directory</h1>
            <h5>
                Click on carrots to filter by heading or use the search box to narrow your results.
            </h5>
        </div>
    );
}

export default Jumbotron;
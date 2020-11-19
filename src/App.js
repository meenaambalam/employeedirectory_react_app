import React from "react";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import SearchContainer from "./components/SearchContainer/SearchContainer";

function App() {
    document.title = "Employee Directory";
    console.log("From App function");
    return (
        <Wrapper>
            <Jumbotron />
            <SearchContainer />
        </Wrapper>
    )
}

export default App;
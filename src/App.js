import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import SearchContainer from "./components/SearchContainer/SearchContainer";

// Main Functiaonal Component which is collection of Wrapper, Jumbotron and SearchContainer component
// Should return all components within one div element. Wrapper plays that role here
function App() {
    document.title = "Employee Directory";

    return (
        <Wrapper>
            <Jumbotron />
            <SearchContainer />
        </Wrapper>
    )
}

export default App;
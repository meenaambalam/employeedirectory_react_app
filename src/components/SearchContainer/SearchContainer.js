import React, { Component } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchResults from "../SearchResults/SearchResults";
import API from "../../utils/API";

class SearchContainer extends Component {
    state = {
        search: "",
        empResult: {}
    };

    componentDidMount(){
        API.getAllEmployees()
        .then(res => this.setState({empResult : res.data.results}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {

        console.log("handleInputChange function running");
        const value = event.target.value;
        this.setState({ 
            search: value
        });
    }


    render(){
        console.log("this.state.search: ", this.state.search);
        console.log("this.handleInputchange: ", this.handleInputChange);
        return (
            <div>
                <SearchInput
                  search={this.state.search}
                  handleInputChange={this.handleInputChange}
                />
                <SearchResults empResults={this.state.empResult} />
            </div>
        );
    }
}

export default SearchContainer;
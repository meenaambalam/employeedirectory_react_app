import React, { Component } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchResults from "../SearchResults/SearchResults";
import API from "../../utils/API";

class SearchContainer extends Component {
    state = {
        search: "",
        empResult: []
    };

    componentDidMount(){
        API.getAllEmployees()
        .then(res => {
            const cleanData = res.data.results.map(emp => ({
                ...emp,
                fullName : emp.name.first + " " + emp.name.last,
            }))
            this.setState({empResult : cleanData})
        })
    
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        let value = event.target.value;
        console.log("handleInputChange function running");
        //const empFilteredRes = this.state.empResult.filter(employee => (employee.name.first.search(this.state.search) || employee.name.last.search(this.state.search)));
        this.setState({ 
            [name] : value
            // empResult : this.empFilteredRes
        }, () => console.log("this state: " + this.state)
        
        );
    }

    handleSortName = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.fullName > y.fullName ? 1 : -1))
        })
        console.log("event", event);
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
                <SearchResults 
                    search={this.state.search} 
                    empResults={this.state.empResult}
                    handleSortName={this.handleSortName}
                />
            </div>
        );
    }
}

export default SearchContainer;
import React, { Component } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchResults from "../SearchResults/SearchResults";
import API from "../../utils/API";

// Class Component that is stateful and keeps track of all the state changes in the App
class SearchContainer extends Component {

    //state variables
    state = {
        search: "",
        empResult: []
    };

    //Life Cycle Method that is executed after the first render only on the client side.
    componentDidMount(){
        API.getAllEmployees()
        .then(res => {
            const cleanData = res.data.results.map(emp => ({
                ...emp,
                fullName : emp.name.first + " " + emp.name.last,
                age: emp.dob.age
            }))
            this.setState({empResult : cleanData})
        })
    
        .catch(err => console.log(err));
    };

    // Handler for "Search" Input Box onChange event
    // Everytime the values in the input element change, this gets executed.
    // The state variable "search" is assigned the value that is typed into the input box and as state is changed, render will automatically run
    handleInputChange = event => {
        // const name = event.target.name;
        let value = event.target.value;
        console.log("handleInputChange function running");
   
        this.setState({ 
            search : value     // can also be written as [ name ] : value, with the combination of line 27
        }, () => console.log("this state: " + this.state)
        
        );
    }

    // Handler for Sorting by Name 
    handleSortName = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.fullName > y.fullName ? 1 : -1))
        })
     }

    // Handler for Sorting by Age
    handleSortAge = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.age > y.age ? 1 : -1))
        })
    }

    // Handler for Sorting by Phone
    handleSortPhone = event => {
        this.setState({
            empResult : this.state.empResult.sort((x,y) => (x.cell > y.cell ? 1 : -1))
        })
    }

    // render displays the HTML code inside the specified HTML elements
    render(){
        console.log("this.state.search: ", this.state.search);
        console.log("this.handleInputchange: ", this.handleInputChange);

        return (
            <div>
                <SearchInput
                  search={this.state.search}                        //props sent to SearchInput functional component
                  handleInputChange={this.handleInputChange}
                />
                <SearchResults 
                    search={this.state.search}                      //props sent to SearchResults functional component
                    empResults={this.state.empResult}
                    handleSortName={this.handleSortName}
                    handleSortAge={this.handleSortAge}
                    handleSortPhone={this.handleSortPhone}
                />
            </div>
        );
    }
}

export default SearchContainer;
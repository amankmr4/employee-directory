/* eslint-disable no-undef */
import React, { Component } from "react";
import Title from "../Title"
import SearchBar from "../SearchBar"
import ResultsTable from "../ResultsTable"
import API from "../../utils/API"

class MainPage extends Component {
    state = {
        search: "",
        results: []
    }


    componentDidMount() {
        API.search()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({ search: e.target.value })
    }




    render() {
        const filteredList = this.state.results.filter((item) => {
            let values = item.name.first + item.name.last;
            values = values.toLowerCase();
            return values.indexOf(this.state.search.toLowerCase()) !== -1
        })
        return (
            <div>
                <Title />
                <SearchBar handleInput={this.handleInput} />
                <ResultsTable results={filteredList} />
            </div>
        )

    }
}
export default MainPage;
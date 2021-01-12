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
        const people = this.state.results
        return (
            <div>
                <Title />
                <SearchBar handleInput={this.handleInput} />
                <ResultsTable results={people} />
            </div>
        )

    }
}
export default MainPage;
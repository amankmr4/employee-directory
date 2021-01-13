/* eslint-disable no-undef */
import React, { Component } from "react";
import Title from "../Title"
import SearchBar from "../SearchBar"
import ResultsTable from "../ResultsTable"
import API from "../../utils/API"

class MainPage extends Component {
    state = {
        search: "",
        results: [],
        sorted: true
    }


    componentDidMount() {
        API.search()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({ search: e.target.value })
        console.log(this.state.results)
    }

    handleSort = () => {
        if (this.state.sorted === true) {
            this.setState({ sorted: false })
            const ascending = this.state.results.sort((a, b) => (a.name.first + a.name.last > b.name.first + b.name.last) ? 1 : -1)
            this.setState({ results: ascending })

        } else {
            this.setState({ sorted: true })
            const descending = this.state.results.sort((a, b) => (a.name.first + a.name.last > b.name.first + b.name.last) ? -1 : 1)
            this.setState({ results: descending })

        }
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
                <ResultsTable results={filteredList} sorted={this.state.sorted} handleSort={this.handleSort} />
            </div>
        )

    }
}
export default MainPage;
import React from "react";

function SearchBar(props) {

    return (
        <form>
            <label>Search For Name</label>
            <input type="text" onChange={props.handleInput}>
            </input>
        </form>
    )

}

export default SearchBar;
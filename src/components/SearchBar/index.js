import React from "react";

function SearchBar(props) {

    return (
        <form className="text-center mb-2 mt-0">
            <label className="mr-2">Search by name</label>
            <input type="text" onChange={props.handleInput}>
            </input>
        </form>
    )

}

export default SearchBar;
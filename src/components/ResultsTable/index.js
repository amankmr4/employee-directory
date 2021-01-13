import React from "react";

function ResultsTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th><button onClick={props.handleSort} data-type={props.sorted}>Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((people, i) =>
                    <tr key={i}>
                        <td>{people.name.first} {people.name.last}</td>
                        <td>{people.email}</td>
                        <td>{people.phone}</td>
                        <td>{people.dob.date.substring(0, 10)}</td>
                    </tr>
                )}
            </tbody>
        </table>

    );
}

export default ResultsTable
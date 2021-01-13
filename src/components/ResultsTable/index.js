import React from "react";
import './styles.css'

function ResultsTable(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><button onClick={props.handleSort} data-type={props.sorted} className="btn btn-link">Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((people, i) =>
                    <tr key={i}>
                        <td><img src={people.picture.large} alt="profile"></img></td>
                        <td>{people.name.first} {people.name.last}</td>
                        <td>{people.phone}</td>
                        <td>{people.email}</td>
                        <td>{people.dob.date.substring(0, 10)}</td>
                    </tr>
                )}
            </tbody>
        </table>



    );
}

export default ResultsTable
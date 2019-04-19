import React, { Component } from 'react'
import { Link } from "react-router-dom";

// See comments in ListCandies.js!
export default class EmployeeList extends Component {
    render () {
        return (
            <section className="content">
            {
            this.props.employees.map(employee => 
                <div key={employee.id}>
                <p>{employee.name} </p>
                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                <button onClick={()=> this.props.deleteEmployee(employee.id)}>Delete</button>
            </div>)
            }
            </section>
        )
    }
}
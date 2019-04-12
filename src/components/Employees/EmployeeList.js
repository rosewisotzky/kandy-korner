import React, { Component } from 'react'
// See comments in ListCandies.js!
export default class EmployeeList extends Component {
    render () {
        return (
            <section className="content">
            {
            this.props.employees.map(employee => 
                <div key={employee.id}>
                <p>{employee.name} </p>
            </div>)
            }
            </section>
        )
    }
}
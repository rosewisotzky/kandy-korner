import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from './Employees/EmployeeList'
import LocationsList from './storeLocations/ListLocations'
import CandyList from './Candies/ListCandies'


export default class ApplicationViews extends Component {

    // The state is an object! This is React, we're all objects here. It represents the values of the properties we use to render a component. Here, we are accessing our arrays we made above and using this to tell us that it's in the same object. 
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }
componentDidMount () {
    const newState = {}

    fetch("http://localhost:5002/individualCandies?_expand=candyType")
    .then(r => r.json())
    .then(candies => newState.candies = candies)
    .then(() => fetch("http://localhost:5002/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch("http://localhost:5002/locations")
    .then(r => r.json()))
    .then(locations => newState.locations = locations)
    .then(() => fetch ("http://localhost:5002/owners")
    .then(r => r.json()))
    .then(owners => newState.owners = owners)
    .then(() => this.setState(newState))
}
    render () {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props)=> {
                    return <LocationsList locations={this.state.locations} />
                }} />
                <Route path="/employees" render={(props)=> {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props)=> {
                    return <CandyList candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}
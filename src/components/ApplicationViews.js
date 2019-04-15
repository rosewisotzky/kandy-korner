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

    // Here we are making our fetch calls to grab our data from the database. Since this exercise wants us to use find, we're doing two separate calls for candyTypes and Individual candies. We are using newState to push those objects into our empty arrays that are declared above in state. 
    fetch("http://localhost:5002/individualCandies")
    .then(r => r.json())
    .then(candies => newState.candies = candies)
    fetch("http://localhost:5002/candyTypes")
    .then(r => r.json())
    .then(candyTypes => newState.candyTypes = candyTypes)
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
                {/* Here we're setting our route path in our navbar to access the candies resource. We're accessing the state in our this.state.candies and setting the candyTypes as an argument. */}
                <Route path="/candies" render={(props)=> {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}
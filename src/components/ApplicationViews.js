import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from './Employees/EmployeeList'
import LocationsList from './storeLocations/ListLocations'
import CandyList from './Candies/ListCandies'
import LocationsManager from '../modules/LocationsManager'
import EmployeeManager from '../modules/EmployeesManager'
import IndividualCandyManager from '../modules/IndividualCandyManager'
import CandyTypeManager from '../modules/CandyTypesManager'

export default class ApplicationViews extends Component {

    // The state is an object! This is React, we're all objects here. It represents the values of the properties we use to render a component. Here, we are accessing our arrays we made above and using this to tell us that it's in the same object. 
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }
    // Here is our method for deleting candies. We are passing in our id argument. We make a DELETE fetch call to the id of the candy we're targeting. 
    deleteCandy = id => {
        return fetch(`http://localhost:5002/individualCandies/${id}`, {
            method: "DELETE"
        })
        // Here, we have a series of chained .then statements. Our first one is taking the event and turning it into JSON. 
        .then(e => e.json())
        // This .then is accessing the individualCandies, and by doing that we can access the foreign key on it and it's values.
        .then(() => fetch(`http://localhost:5002/individualCandies`))
        .then(e => e.json())
        .then(candies => this.setState({
            candies:candies
        }))
    }
componentDidMount () {
    const newState = {}

    // Here we are making our fetch calls to grab our data from the database. Since this exercise wants us to use find, we're doing two separate calls for candyTypes and Individual candies. We are using newState to push those objects into our empty arrays that are declared above in state. 
    IndividualCandyManager.getAll()
    .then(candies => newState.candies = candies)
    CandyTypeManager.getAll()
    .then(candyTypes => newState.candyTypes = candyTypes)
    EmployeeManager.getAll()
    .then(employees => newState.employees = employees)
    LocationsManager.getAll()
    .then(locations => newState.locations = locations)
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
                {/* Here we're setting our route path in our navbar to access the candies resource. We're accessing the state in our this.state.candies and setting the candyTypes as an argument. W */}
                <Route path="/candies" render={(props)=> {
                    return <CandyList deleteCandy={this.deleteCandy}candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}
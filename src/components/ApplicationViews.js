import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from './Employees/EmployeeList'
import LocationsList from './storeLocations/ListLocations'
import CandyList from './Candies/ListCandies'


export default class ApplicationViews extends Component {
// Here we are creating arrays to represent information that would be normally displayed in our API.
    locationsfromAPI = [
        {id: 1, location: "Hell", address: "100 Good Job Drive"},
        {id: 1, location: "Deep Inside of Your Soul", address: "100 Great Job Drive"}
    ]
    employeesFromAPI = [
        {id: 1, name: "Me"},
        {id: 2, name: "Myself"},
        {id: 3, name: "I"}
    ]
    candyTypes = [
        {id: 1, type: "DELICIOUS AND VERY GOOD"},
        {id: 2, type: "I guess this is okay"}
    ]
    individualCandiesFromAPI = [
        {id: 1, candyTypeId: 2, name: "Werther's Original", description: "Old people candy"},
        {id: 2, candyTypeId: 1, name: "Altoids", description: "Also old people candy"}
    ]
    // The state is an object! This is React, we're all objects here. It represents the values of the properties we use to render a component. Here, we are accessing our arrays we made above and using this to tell us that it's in the same object. 
    state = {
        locations: this.locationsfromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.individualCandiesFromAPI
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
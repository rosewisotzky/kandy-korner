import React, { Component } from 'react'
import LocationList from "./storeLocations/ListLocations"
import EmployeeList from "./Employees/EmployeeList"
import CandyList from "./Candies/ListCandies"
import "./kandykorner.css"
// This component called KandyKorner represents the data that makes up a candy shop.
export default class KandyKorner extends Component {
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
// Render returns an HTML representation (keep in mind, it's not actual HTML but JavaScript lookin' like HTML aka JSX). It's a factory function. All these components seem to be factory functions. But to whoever is reading this, correct me if I'm wrong!
    render () {
        return (
            <div>
                <h2>KandyKorner</h2>
                <h3>Locations: </h3>
                <LocationList locations={this.state.locations} />
                <h3>Employees: </h3>
                <EmployeeList employees={this.state.employees} />
                <h3>Candies: </h3>
                {/* Here we're doing a little state props shuffle. First thing we're doing is calling the component that's in ListCandies.js. Now that we are rendering these components they become child components. State responds to any changes made in the component referenced and renders them without having to add any extra code over here. You won't believe what happens next!! Come checkout ListCandies.js to find out! */}
                <CandyList candies={this.state.candies} />
            </div>
        );
    }
}  

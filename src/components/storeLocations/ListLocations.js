import React, { Component } from 'react';
import { Link } from "react-router-dom";
// See comments in ListCandies.js!
export default class LocationList extends Component {
    render () {
        return (
            <section className="content">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                    <h4>{location.name}</h4>
                    <p>{location.address}</p>
                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                    <button onClick = {()=>this.props.deleteLocation(location.id)}>Delete</button>
                    </div>)
            }
            </section>
        )
    }
}
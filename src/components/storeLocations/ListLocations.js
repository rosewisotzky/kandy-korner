import React, { Component } from 'react';
// See comments in ListCandies.js!
export default class LocationList extends Component {
    render () {
        return (
            <section className="content">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                    <h4>{location.location}</h4>
                    <p>{location.address}</p>
                    </div>)
            }
            </section>
        )
    }
}
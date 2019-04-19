import React, { Component } from 'react'
// In this component we are creating our details for each of our locations. Inside of this component we're rendering the JSX that's going to build out a card displaying the name and address of a location. We're also setting the state to disable our delete button after a click. That way, it doesn't get sticky when someone gets impatient and hits details a bunch. We're passing the delete function in our props. This doesn't affect the rest of our application, which is why we have a local state in this component.
export default class LocationDetail extends Component {
    render () {
        return (
            <section className="location">
            <div key={ this.props.location.id } className="card">
            <h4 className="card-title">
                {this.props.location.location}
            </h4>
            <h6 className="card-title">{this.props.location.address}</h6>
            <button onClick={
                () => {
                    this.setState(
                        { saveDisabled: true },
                        () => this.props.deleteAnimal(this.props.id)
                    )
                }
            }
            disabled={ this.state.saveDisabled }
            className="card-link">Delete</button>
            </div>
            </section>
        )
    }

}
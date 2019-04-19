import React, { Component } from 'react'
import './candies.css'
// In this component we are creating our details for each of our candies. Inside of this component we're rendering the JSX that's going to build out a card displaying the name and type of candy. We're also setting the state to disable our delete button after a click. That way, it doesn't get sticky when someone gets impatient and hits details a bunch. We're passing the delete function in our props. This doesn't affect the rest of our application, which is why we have a local state in this component.
export default class CandyDetail extends Component {
    state = {
        saveDisabled: false
    }
    render () {

        return (
            <section className="candy">
            <div key={ this.props.candy.id } className="card">
            <h4 className="card-title">
                {this.props.candy.name}
            </h4>
            <h6 className="card-title">{this.props.candy.address}</h6>
            <button onClick={
                () => {
                    this.setState(
                        { saveDisabled: true },
                        () => this.props.deleteCandy(this.props.candy.id)
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
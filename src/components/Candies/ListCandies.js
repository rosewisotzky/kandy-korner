import React, { Component } from 'react'
// Welcome to ListCandies! Or should I say ListKandies? Over here we are going to use props and render the HTML elements that we're calling over in KandyKorner.js . Props carries those changes we make and tells state that this is what we want on our DOM.
export default class ListCandies extends Component {
    render () {
        return (
            // Wrap it in a section! Give it a class name! Since we're writing className that's a big hint that we're writing JSX and not HTML.
            <section className="candies">
            {
                // Over here we are using props to track what changes we're making to state. We access the key value we set in our state to get to our candies. Then we use map to loop through the objects in our array of candies. 
                this.props.candies.map(candy =>
                    // I think the key just let's us know ~which~ candy object in our array we are messin' with. 
                    <div key={candy.id}>
                    {/* Then our old friend dot notation swings in and we use that to access the names and description values of our object. */}
                    <p>Name: {candy.name}</p>
                    <p>Description: {candy.description}</p>
                    </div>
                    )
            }
            </section>
        )
    }
}
import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import "./kandykorner.css"

// This component called KandyKorner represents the data that makes up a candy shop.
export default class KandyKorner extends Component {
// Render returns an HTML representation (keep in mind, it's not actual HTML but JavaScript lookin' like HTML aka JSX). It's a factory function. All these components seem to be factory functions. But to whoever is reading this, correct me if I'm wrong!
    render () {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>

        );
    }
}  
